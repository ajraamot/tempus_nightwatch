## Nightwatch Challenge
### by A.Raamot

### This is a sample project that uses Nightwatch.js 

**To set up:**
Download the following and copy to the ``bin`` directory
* chromedriver http://chromedriver.storage.googleapis.com/index.html?path=2.37/
* selenium-server-standalone-3.9.1.jar http://selenium-release.storage.googleapis.com/index.html?path=3.9/

**To run:**
```
./node_modules/.bin/nightwatch tests
```

### Tests include the following:
* **New Post:** uploads an image and verifies it gets to next page
* **Search:** searches and verifies that results are tied to query
* **Random Mode:** verifies that the random button works and takes user to the next page with no errors

Test are run on both Chrome and Firefox.
