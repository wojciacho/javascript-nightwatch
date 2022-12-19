module.exports = {
  "@tags": ["magento23"],
  changingLastName(browser) {
  const page = browser.page.magentoobject23();
  
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

  page
  .clickSwitch()
  .clickMyAccount()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/")

  page
  .clickEdit()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/edit/")

  page
  .typeLastName("Wojciechowski")
  .clickSave()

  browser
  .assert.textEquals(".message-success", "You saved the account information.")
  .assert.textContains(".box-information > .box-content", "Wojciech Wojciechowski")

  page
  .clickEdit()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/edit/")

  page
  .typeLastName("Wojciech")
  .clickSave()

  browser
  .assert.textEquals(".message-success", "You saved the account information.")
  .assert.textContains(".box-information > .box-content", "Wojciech Wojciech")
}
}



