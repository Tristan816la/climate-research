import requests
import bs4
import csv
import json
import concurrent.futures
import time

MI = 463731
MA = 463740
NUM_THREADS = 30

f = open('initial4.csv', 'a')
writer = csv.writer(f)

eF = open('errors4.txt', 'a')

start_time = time.time()


def get_data(i):
    print("checking " + str(i))
    r = requests.get(f"https://www.plugshare.com/location/{i}")
    soup = bs4.BeautifulSoup(r.text, 'html.parser')
    d = soup.find('script', type='application/ld+json')
    try:
        data = json.loads(d.text)
        if "@type" in data and data["@type"] == "LocalBusiness":
            writer.writerow([i, data])
            f.flush()
    except:
        print(f'Decoding JSON has failed: {i}')
        eF.write(f'{i}\n')
        eF.flush()


with concurrent.futures.ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    executor.map(get_data, range(MI, MA + 1))

eF.close()
f.close()
print(time.time() - start_time)
