const { Cluster } = require('puppeteer-cluster');

const SITE = 'https://www.plugshare.com/location/';
const APISITE = 'https://api.plugshare.com/v3/locations/';
const MIN = 4001;
const MAX = 4100;
const TIMEOUT = 90000000;
const MAX_CONCURRENCY = 10;

const fs = require('fs');

(async () => {
  const data = {};

  const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-web-security',
    '--disable-infobars',
    '--window-position=0,0',
    '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
  ];

  const options = {
    args,
    headless: true,
    ignoreHTTPSErrors: true,
  };

  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: MAX_CONCURRENCY,
    puppeteerOptions: options,
    monitor: true,
    timeout: TIMEOUT,
  });

  await cluster.task(async ({ page, data: url }) => {
    page.on('response', async (response) => {
      const request = response.request();
      const number = request.url().slice(request.url().lastIndexOf('/') + 1);
      if (
        response.status() === 200 &&
        request.url() === `${APISITE}${number}` &&
        !isNaN(number)
      ) {
        try {
          const res = await response.json();
          if (
            res &&
            res['reverse_geocoded_address_components'] &&
            res['reverse_geocoded_address_components']['country_code'] === 'US'
          ) {
            data[number] = res;
          }
        } catch (error) {
          console.error(error);
        }
      }
    });

    await page.goto(url, { timeout: 0 });
  });

  for (let i = MIN; i < MAX + 1; i++) {
    cluster.queue(`${SITE}${i}`);
  }
  // many more pages

  await cluster.idle();
  await cluster.close();

  fs.writeFileSync(`data/US-${MIN}-${MAX}.json`, JSON.stringify(data));
})();
