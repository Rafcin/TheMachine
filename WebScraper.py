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


def getSoupFromURL(url): return BeautifulSoup(urllib2.urlopen(url).read(), "lxml")


def getAllUrlsFromSoup(s):
	a_elements = s.findAll("a")
	urlArray = []

	for link in links:
	    print (link["href"])
    	urlArray.append(link["href"])

    return urlArray

soup = getSoupFromURL(targUrl)

urlArray = getAllUrlsFromSoup(soup)

#this is the function you need to crawl - depends on above functions
# I highly recommend doing it asynchronously or something, I won't call it here but it's what you need
# ps this is wrong I'm not done with it yet <3
# def crawlPageLinks(urls):
# 	for url in urls:
# 		new_urls = getAllUrlsFromSoup(url)
# 		if new_urls.length
# 			crawlPageLinks(new_urls)
		


def randomFileEnding(lngth):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(lngth) )


for url in urlArray:
    if "raw" in url and targExt in url:
        print(url)
        urllib2.urlretrieve(url,saveDir+"github_code_"+randomFileEnding(20)+".txt")