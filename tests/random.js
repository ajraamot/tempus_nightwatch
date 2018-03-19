var firstRandomImage;
var secondRandomImage;
var thirdRandomImage;

module.exports = {
    'imgur new post test' : function (browser) {
        browser
        .url('https://imgur.com/')
        .waitForElementVisible('body', 2000)
        .assert.title('Imgur: The magic of the Internet')
        // .waitForElementVisible('a[id=random-button]', 4000)
        .pause(3000)
        .click('a[id=random-button]')
        .waitForElementVisible('h2[class=sg-title]', 10000)
        .assert.value('h2[class=sg-title]', 'Random')
        .pause(3000)
        // .end();
        // browser
        .getAttribute('div[class=post-image-container]', 'id', function(result) {
            firstRandomImage = result;
            console.log('first result = ', result);
        })
        // console.log('first Random Image = ' + firstRandomImage);
        // browser
        .click('div[class=navNext]')
        .pause(3000)
        // .waitForElementVisible('h2[class=sg-title]', 10000)
        .assert.value('h2[class=sg-title]', 'Random')
        .pause(3000)
        // .end();        
        // browser
        .getAttribute('div[class=post-image-container]', 'id', function(result) {
            secondRandomImage = result;
            console.log('first result = ', result);
        })
        .end();
        // secondRandomImage = browser.getElementsByClassName('post-image-container');
        // assert(firstRandomImage !== secondRandomImage);
    }
};
