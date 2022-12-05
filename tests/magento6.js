module.exports = {
    "@tags": ["magento6"],
    verifyQuantity(browser) {
    const page = browser.page.magentoobject6();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")

    page
    .clickWomen()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/women.html")
    .execute('scrollTo(0, 1700')
    .pause(1000)
    .assert.visible('a[title="Radiant Tee"]')

    page
    .clickRadiantTee()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/radiant-tee.html")

    page
    .clickSize()
    .clickColor()
    .typeQuantity("5")
    .clickAddToCart()

    browser
    .assert.visible(".message-success")
    .assert.textEquals(".message-success", "You added Radiant Tee to your shopping cart.")

    page
    .clickCart()
    .clickCheckout()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/")

    page
    .showItems()

    browser
    .assert.textEquals(".details-qty > .value", "5")
  }
}