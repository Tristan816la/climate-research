from selenium import webdriver
from selenium.webdriver.common.by import By
import time

start = time.time()

driver = webdriver.Chrome("/Users/tristanque/Downloads/chromedriver")

driver.get('https://www.plugshare.com/location/102')

i = driver.find_element(By.CLASS_NAME, 'information')

print(i.text)

data = {}

driver.close()
print(time.time() - start)
