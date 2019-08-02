# Written by Raf 8/2/2019 at 12:41

# I had to add this for issues with Python3
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2
from urllib.parse import urljoin
import re
from re import search
from bs4 import BeautifulSoup
import random, string

targUrl = "https://github.com/googlesamples/android-RecyclerView/"
targExt = ".java"
saveDir = "/home/nvidia/Desktop/OpenAI-Data/data/scraped/"

page = urllib2.urlopen(targUrl)
soup = BeautifulSoup(page.read(), "lxml")
links = soup.findAll("a")

linkArray = []

for link in links:
    print (link["href"])
    linkArray.append(link["href"])

def randomFileEnding(lngth):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(lngth) )

for url in linkArray:
    if "raw" in url and targExt in url:
        print(url)
        urllib2.urlretrieve(url,saveDir+"github_code_"+randomFileEnding(20)+".txt")