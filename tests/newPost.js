"use strict"; 

module.exports = {
    'imgur new post test' : function (browser) {
        let pathToImage = '~/workspace_vscode/tempus_nightwatch/Great_Horned_Owl.jpg';
        browser
        .url('https://imgur.com/')
        .waitForElementVisible('body', 2000)
        .assert.title('Imgur: The magic of the Internet')
        .waitForElementVisible('span[class=upload-btn-text]', 4000)
        .click('span[class=upload-btn-text]')
        .waitForElementVisible('div[id=upload-modal]', 4000)
        // .waitForElementVisible('label[class=browse-btn]', 1000)
        .waitForElementVisible('input[type=text]', 1000)
        .setValue('input[type=text]', pathToImage + '\n')
        // .click('label[class=browse-btn]')
        .pause(30000)
        .end();
        
//         .waitForElementVisible('h1[class=post-title]', 1000)

    }
};