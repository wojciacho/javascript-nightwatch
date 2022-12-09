module.exports = {
    "@tags": ["magento12"],
    removeItemsFromCartAfterLogin(browser) {
    const page = browser.page.magentoobject12();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    
    page
    .clickSignIn()
    .typeEmail("warrockpremk@o2.pl")
    .typePassword("WOJTAS12345!")
    .clickSend()
    
    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    
    page
    .clickMen()
    
    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/men.html")
    .execute('scrollTo(0, 1500)')

    page
    .clickHoodie()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/hero-hoodie.html")

    page
    .clickSize()
    .clickHoodieColor()
    .typeQuantity("1")
    .clickAddToCart()

    browser
    .assert.textEquals(".message-success", "You added Hero Hoodie to your shopping cart.")

    page
    .clickMen()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/men.html")
    .execute('scrollTo(0, 1500)')

    page
    .clickWeatherTank()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/argus-all-weather-tank.html")

    page
    .clickSize()
    .clickTankColor()
    .typeQuantity("1")
    .clickAddToCart()

    browser
    .assert.textEquals(".message-success", "You added Argus All-Weather Tank to your shopping cart.")

    page
    .clickCart()

    browser
    .assert.textEquals(".items-total > .count", "2")

    page
    .clickViewCart()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/checkout/cart/")

    page
    .clickDelete()
    .pause(1000)
    .clickDelete()

    browser
    .assert.textEquals(".base", "Shopping Cart")
    .assert.textContains(".column", "You have no items in your shopping cart.")
  }
}


