 ## Nightwatch Challenge
### by A.Raamot

### This is a sample project that uses Nightwatch.js 

**To set up:**
1. Download the following and copy to the ``bin`` directory:
* chromedriver http://chromedriver.storage.googleapis.com/index.html?path=2.37/
* selenium-server-standalone-3.9.1.jar http://selenium-release.storage.googleapis.com/index.html?path=3.9/

2. Perform an ``npm install`` to install the depedencies listed in package.json

**To run:**
```
npm test
```

### Tests include the following (work in progress):
* **New Post:** uploads an image and verifies it gets to next page
* **Search:** searches and verifies that results are tied to query
* **Random Mode:** verifies that the random button works and takes user to the next page with no errors

Test are run on Chrome, still need to fix configuration for Firefox.
