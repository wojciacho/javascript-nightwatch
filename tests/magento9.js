module.exports = {
    "@tags": ["magento9"],
    checkCartAfterLogin(browser) {
    const page = browser.page.magentoobject9();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    
    page
    .clickMen()

    browser
    .execute('scrollTo(0, 1500)')
    
    page
    .clickHoodie()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/hero-hoodie.html")

    page
    .clickSize()
    .clickColor()
    .typeQuantity("1")
    .clickAddToCart()

    browser
    .assert.textEquals(".message-success", "You added Hero Hoodie to your shopping cart.")

    page
    .clickCart()
    .clickCheckout()
    
    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/")
    .pause(2000)

    page
    .clickCartItem()

    browser
    .assert.visible(".product-item-details")
    .assert.textEquals(".product-item-name", "Hero Hoodie")

    page
    .clickSignIn()
    .typeEmail("warrockpremk@o2.pl")
    .typePassword("WOJTAS12345!")
    .clickLogin()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/")

    page
    .clickCartItem()

    browser
    .assert.visible(".product-item-details")
    .assert.textEquals(".product-item-name", "Hero Hoodie")
  }
}


