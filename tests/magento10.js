module.exports = {
    "@tags": ["magento10"],
    loginAndCheckCart(browser) {
    const page = browser.page.magentoobject10();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    
    page
    .clickLogin()
    
    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")

    page
    .typeEmail("warrockpremk@o2.pl")
    .typePassword("WOJTAS12345!")
    .clickSignIn()
    
    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")

    page
    .clickMen()

    browser
    .execute('scrollTo(0,1500)')

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
    .pause(3000)

    page
    .clickCartItem()

    browser
    .assert.visible(".product-item-details")
    .assert.textEquals(".product-item-name", "Hero Hoodie")
  }
}


