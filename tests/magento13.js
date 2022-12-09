module.exports = {
    "@tags": ["magento13"],
    removeItemsFromCartAfterRegister(browser) {
    const page = browser.page.magentoobject13();
    
    page
    .navigate()

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
    .clickCreateAccount()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/create/")
    .assert.textEquals(".base", "Create New Customer Account")

    page
    .typeFirstName("Wojciech")
    .typeLastName("Wojciacho")
    .typeEmail(makeEmail())
    .typePassword("WOJTAS12345!")
    .clickCreate()
    
    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/")
    .assert.textEquals(".message-success", "Thank you for registering with Fake Online Clothing Store.")
    .assert.textMatches(".page-header > .panel > .header > .header > .greet > .logged-in", "Welcome, Wojciech Wojciacho!")

    page
    .clickCart()
    .clickViewCart()
    .clickDelete()
    .pause(1000)
    .clickDelete()

    browser
    .assert.textEquals(".base", "Shopping Cart")
    .assert.textContains(".column", "You have no items in your shopping cart.")

    page
    .clickSwitch()
    .clickLogout()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/logoutSuccess/")
    .assert.textEquals(".base", "You are signed out")
    .assert.textEquals("#maincontent > div.columns > div > p", "You have signed out and will go to our homepage in 5 seconds.")
  }
}

function makeEmail() {
  let strValues = "abcdefg12345"   
  let strEmail = ""
  let strTmp;
  for(let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()))
    strEmail = strEmail + strTmp
  }
  strTmp = ""
  strEmail = strEmail + "@"
  for(let j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()))
    strEmail = strEmail + strTmp
  }
  strEmail = strEmail + ".com"
  return strEmail
}

