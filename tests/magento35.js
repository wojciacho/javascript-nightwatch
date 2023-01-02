module.exports = {
  "@tags": ["magento35"],
  priceOptions(browser) {
  const page = browser.page.magentoobject35();
  
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

  page
  .clickPrice()

  browser
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "$10.00 - $19.99")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "$20.00 - $29.99")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "$30.00 - $39.99")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "$40.00 - $49.99")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "$50.00 - $59.99")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "$60.00 - $69.99")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "$70.00 - $79.99")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "$90.00 and above")
  
  page
  .clickPriceEl()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html?price=30-40")
  .assert.textContains(".filter-value", "$30.00 - $39.99")
  .assert.textContains("#toolbar-amount", "4 Items")
  }
}



