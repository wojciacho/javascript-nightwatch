module.exports = {
    "@tags": ["magento18"],
    placeOrderBeforeLogin(browser) {
    const page = browser.page.magentoobject18();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    .execute('scrollTo(0, 1700)')
    
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
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/#shipping")
    .pause(1000)

    page
    .clickSignIn()
    .typeEmail("warrockpremk@o2.pl")
    .typePassword("WOJTAS12345!")
    .clickSubmit()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/#shipping")
    .pause(1000)
    .assert.visible(".selected-item")

    page
    .clickNext()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/#payment")
    .assert.textContains(".billing-address-details", "Chicago, 12345-6789")

    page
    .clickPlaceOrder()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/onepage/success/")
    .assert.textContains(".checkout-success", "We'll email you an order confirmation with details and tracking info.")
    .assert.textEquals(".base", "Thank you for your purchase!")

    page
    .clickContinue()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
  }
}



