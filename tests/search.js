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
        // .click('div[class=icon-search]')
        .pause(3000)
        .assert.urlContains(searchString)
        .assert.title(searchString + ' Images, Photos, Memes, Gifs, and Pictures | Find the latest on Imgur')
        // .assert.cssClassPresent('matched-search-term')
        .assert.elementPresent('span[class=matched-search-term]')
        .expect.element('span class=matched-search-term').text.to.equal('Owl')
        // .getText('span class=matched-search-term', function (result) {
        //     this.assert.equal(result, 'Owl');
        // })
        // .assert.valueContains('span class=matched-search-term', searchString)
        .end();
    }
};
