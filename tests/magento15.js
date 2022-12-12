module.exports = {
    "@tags": ["magento15"],
    addReviewOnProduct(browser) {
    const page = browser.page.magentoobject15();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    .execute('scrollTo(0, 1700)')
    
    page
    .clickHoodie()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/hero-hoodie.html")
    .execute('scrollTo(0, 500)')

    page
    .clickReviews()
    .clickRating()
    .typeNickName("Wojciech")
    .typeSummary("Hero Hoodie")
    .typeReview("Very nice hoodie")
    .clickSubmit()

    browser
    .assert.textEquals(".message-success", "You submitted your review for moderation.")
  }
}



