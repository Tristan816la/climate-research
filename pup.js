import { Cluster } from "puppeteer-cluster";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import dotenv from "dotenv";
dotenv.config();

const SITE = "https://www.plugshare.com/location/";
const APISITE = "https://api.plugshare.com/v3/locations/";
const MIN = parseInt(process.argv[2]);
const MAX = parseInt(process.argv[3]);
const TIMEOUT = 2 ** 31 - 1;
const MAX_CONCURRENCY = 4;
const CANDIDATE_FILE = "public_candidates.txt";
const WRITE_THRESHOLD = 1000;

const s3 = new S3Client({
  region: "us-west-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
// Set the AWS parameters
const Bucket = "plugshare-data";

const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });

const uploadToS3 = async (config) => {
  const parallelUploads3 = new Upload({
    client: s3,
    queueSize: 4, // optional concurrency configuration
    leavePartsOnError: false, // optional manually handle dropped parts
    params: config,
  });
  await parallelUploads3.done();
};

const candidates = new Set();
(async () => {
  try {
    const d = await s3.send(
      new GetObjectCommand({ Bucket, Key: CANDIDATE_FILE })
    );
    const bodyContents = await streamToString(d.Body);
    if (!bodyContents) {
      throw new Error("Could not read candidate file");
    }

    for (const number of bodyContents.split(",")) {
      candidates.add(parseInt(number));
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})().then(() => {
  (async () => {
    let data = {};
    const usCandidates = [];
    let prev = MIN;

    const args = [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-web-security",
      "--disable-infobars",
      "--window-position=0,0",
      "--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    ];

    const options = {
      args,
      headless: true,
      ignoreHTTPSErrors: true,
    };

    const cluster = await Cluster.launch({
      concurrency: Cluster.CONCURRENCY_CONTEXT,
      maxConcurrency: MAX_CONCURRENCY,
      puppeteerOptions: options,
      monitor: true,
      timeout: TIMEOUT,
    });

    await cluster.task(async ({ page, data: url }) => {
      page.on("response", async (response) => {
        const request = response.request();
        const number = request.url().slice(request.url().lastIndexOf("/") + 1);
        if (request.url() === `${APISITE}${number}` && !isNaN(number)) {
          try {
            if (response.status() == 429) {
              console.log(`will retry ${SITE}${number}`);
              await cluster.queue(`${SITE}${number}`);
            } else if (response.status() !== 200) {
              throw new Error("API error: " + response.status());
            } else {
              const res = await response.json();
              if (
                res &&
                res["reverse_geocoded_address_components"] &&
                res["reverse_geocoded_address_components"]["country_code"] ===
                  "US"
              ) {
                data[number] = res;
                usCandidates.push(number);
              }
              if (parseInt(number) - prev + 1 > WRITE_THRESHOLD) {
                await uploadToS3({
                  Bucket,
                  Key: `US-${prev}-${number}.json`,
                  Body: JSON.stringify(data),
                });
                data = {};
                prev = number;
              }
            }
          } catch (error) {
            await uploadToS3({
              Bucket,
              Key: `error-${number}.json`,
              Body: JSON.stringify(error, Object.getOwnPropertyNames(error)),
            });
            console.log(error);
          }
        }
      });

      await page.goto(url, { timeout: 0, waitUntil: "networkidle2" });
    });

    for (let i = MIN; i < MAX + 1; i++) {
      if (candidates.has(i)) {
        await cluster.queue(`${SITE}${i}`);
      }
    }

    await cluster.idle();
    await cluster.close().then(async () => {
      try {
        await uploadToS3({
          Bucket,
          Key: `US-${prev}-${MAX}.json`,
          Body: JSON.stringify(data),
        });
        await uploadToS3({
          Bucket,
          Key: `USCandidates-${MIN}-${MAX}.txt`,
          Body: usCandidates.join(","),
        });
      } catch (error) {
        console.log(error);
      }
    });
  })();
});
