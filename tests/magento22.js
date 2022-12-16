module.exports = {
  "@tags": ["magento22"],
  checkComparisonAfterLogin(browser) {
  const page = browser.page.magentoobject22();
  
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
  .execute('scrollTo(0, 500)')

  page
  .clickAddToCompare()

  browser
  .assert.textEquals(".message-success", "You added product Hero Hoodie to the comparison list.")
  .assert.urlContains("https://magento.softwaretestingboard.com/hero-hoodie.html")

  page
  .clickHome()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com")
  .execute('scrollTo(0, 1700)')

  page
  .clickTanktop()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/argus-all-weather-tank.html")
  .execute('scrollTo(0, 500)')

  page
  .clickAddToCompare()

  browser
  .assert.textEquals(".message-success", "You added product Argus All-Weather Tank to the comparison list.")

  page
  .clickComparison()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/catalog/product_compare/")
  .assert.textEquals(".compare > .counter", "2 items")
  .assert.textEquals("#product-comparison > tbody:nth-child(3) > tr > td:nth-child(2) > strong > a", "Hero Hoodie")
  .assert.textEquals("#product-comparison > tbody:nth-child(3) > tr > td:nth-child(3) > strong > a", "Argus All-Weather Tank")

  page
  .clickDeleteProduct()
  .clickAccept()

  browser
  .assert.textEquals(".message-success", "You removed product Hero Hoodie from the comparison list.")
  .assert.textEquals(".compare > .counter", "1 item")

  page
  .clickDeleteProduct()
  .clickAccept()
  
  browser
  .assert.textEquals(".base", "Compare Products")
  .assert.textEquals(".message-success", "You removed product Argus All-Weather Tank from the comparison list.")
  .assert.textEquals(".main > .empty", "You have no items to compare.")

  page
  .clickHome()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com")
}
}



