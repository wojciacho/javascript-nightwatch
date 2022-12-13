module.exports = {
    "@tags": ["magento16"],
    addToCompare(browser) {
    const page = browser.page.magentoobject16();
    
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
    .clickAddToCompare()

    browser
    .assert.textEquals(".message-success", "You added product Hero Hoodie to the comparison list.")
    .assert.urlContains("https://magento.softwaretestingboard.com/hero-hoodie.html")
  }
}



