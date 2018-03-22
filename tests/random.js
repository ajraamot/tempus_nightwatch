var firstRandomImage;
var secondRandomImage;

module.exports = {
    'imgur new post test' : function (browser) {
        browser
        .url('https://imgur.com/')
        .waitForElementVisible('body', 2000)
        .assert.title('Imgur: The magic of the Internet')
        .pause(3000)
        .click('a[id=random-button]')
        .waitForElementVisible('h2[class=sg-title]', 10000)
        .pause(3000)
        .getAttribute('div[class=post-image-container]', 'id', function(result) {
            firstRandomImage = result.value;
            console.log('first result = ', result);
            console.log('first value = ', result.value);
        })
        .waitForElementVisible('div[class=text]', 1000)
        .click('div[class=text]')
        .pause(3000)
        .getAttribute('div[class=post-image-container]', 'id', function(result) {
            secondRandomImage = result.value;
            console.log('second result = ', result);
            console.log('second value = ', result.value);
        })
        .end();

        // TODO: how to assert that the two values are not equal
        // browser.expect(firstRandomImage).to.not.equal(secondRandomImage)
    }
};
