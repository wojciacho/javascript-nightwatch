module.exports = {
    "@tags": ["magento8"],
    registerUser(browser) {
    const page = browser.page.magentoobject8();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")

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
    .clickSwitch()
    .clickSignOut()

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