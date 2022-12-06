module.exports = {
    "@tags": ["magento7"],
    verifyCart(browser) {
    const page = browser.page.magentoobject7();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")

    page
    .clickCart()

    browser
    .assert.textEquals(".subtitle", "You have no items in your shopping cart.")

    page
    .clickYogaProducts()
    .clickCart()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/collections/yoga-new.html")
    .assert.textEquals(".subtitle", "You have no items in your shopping cart.")
  }
}