module.exports = {
  "@tags": ["magento21"],
  checkComparisonBeforeLogin(browser) {
  const page = browser.page.magentoobject21();
  
  page
  .navigate()

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
}
}



