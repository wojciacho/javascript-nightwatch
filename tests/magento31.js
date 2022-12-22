module.exports = {
  "@tags": ["magento31"],
  showItems(browser) {
  const page = browser.page.magentoobject31();
  
  page
  .navigate()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com")

  page
  .clickMen()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men.html")
  
  page
  .clickTops()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html")
  .assert.visible(".filter-content")
  .execute('scrollTo(0, 2000)')  

  page
  .clickLimiter()
 
  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html?product_list_limit=36")
  .assert.textContains("#toolbar-amount", "Items 1-36 of 48")
}
}



