"use strict"; 

module.exports = {
    'imgur new post test' : function (browser) {
        let imageName =  '/Great_Horned_Owl.jpg';
        browser
        .url('https://imgur.com/')
        .waitForElementVisible('body', 2000)
        .assert.title('Imgur: The magic of the Internet')
        .waitForElementVisible('span[class=upload-btn-text]', 4000)
        .click('span[class=upload-btn-text]')
        .pause(2000)
        .waitForElementVisible('div[id=upload-modal]', 4000)
        .waitForElementVisible('input[id=paste-url-input]', 4000)
        //TODO: figure out how to get it to upload the image
        .setValue('input[id=paste-url-input]', require('path').resolve(__dirname + imageName)) // + '\n')        
        // .setValue('input[id=paste-url-input]', require('path').resolve('/Users/Andrew/Owl.jpg')) // hacky attempt at work around        
        .pause(30000)
        .waitForElementVisible('h1[class=post-title]', 4000)
        // to delete image
        .waitForElementVisible('li[class=delete]', 4000)
        .click('li[class=delete]')
        .waitForElementVisible('div[class=btn-confirm-yes]', 2000)
        .click('a href') // <a href="">Delete Post &amp; Images</a>
        .end();
    }
};