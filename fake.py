import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'}

url = 'https://www.plugshare.com/location/102'

r = requests.get(url, headers=headers)
print(r.text)
