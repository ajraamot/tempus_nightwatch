var searchString = 'owl';

module.exports = {
    'imgur search test' : function (browser) {
        browser
        .url('https://imgur.com/')
        .waitForElementVisible('body', 2000)
        .assert.title('Imgur: The magic of the Internet')
        .waitForElementVisible('div[class=icon-search]', 1000)
        .click('div[class=icon-search]')
        .setValue('input[type=text]', searchString + '\n')
        .pause(3000);

        browser.assert.urlContains(searchString)
        .assert.title(searchString + ' Images, Photos, Memes, Gifs, and Pictures | Find the latest on Imgur')
        .assert.elementPresent('span[class=matched-search-term]')
        .assert.containsText('span[class=matched-search-term]', 'Owl') 
        .end();


        browser.expect.element('span[class=matched-search-term]').text.to.contain(searchString);

        browser.end();

    }
};