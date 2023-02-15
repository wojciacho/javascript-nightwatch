module.exports = {
  "@tags": ["nopcommerce6"],
  Opencart(browser) {
    const page = browser.page.nopobject6();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.visible("#small-searchterms")
    .execute('scrollTo(0, 1600)')
    .assert.visible(".news-list-homepage")
    .assert.textContains("div:nth-child(1) > div.news-head > a", "New online store is open!")
    .assert.textContains("div:nth-child(2) > div.news-head > a", "nopCommerce new release!")
    .assert.textContains("div:nth-child(3) > div.news-head > a", "About nopCommerce")
    .execute('scrollTo(0, 1800)')
    .assert.visible(".home-page-polls")
  

    page
    .clickPollAnswer()
    .clickVote()

    browser
    .assert.visible("#block-poll-vote-error-1")
    .assert.textContains("#block-poll-vote-error-1", "Only registered users can vote.")
  },
};
