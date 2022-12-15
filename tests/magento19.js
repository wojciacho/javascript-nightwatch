module.exports = {
    "@tags": ["magento19"],
    placeOrderAfterLogin(browser) {
    const page = browser.page.magentoobject19();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")

    page
    .clickSignIn()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")

    page
    .typeEmail("warrockpremk@o2.pl")
    .typePassword("WOJTAS12345!")
    .clickSubmit()
    
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
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/")
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



