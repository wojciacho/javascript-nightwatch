module.exports = {
  "@tags": ["magento34"],
  sizeOptions(browser) {
  const page = browser.page.magentoobject34();
  
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
  .clickSize()

  browser
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "XS")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "S")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "M")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "L")
  .assert.textContains("#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content", "XL")

  page
  .clickSizeM()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html?size=168")
  .assert.textContains(".filter-value", "M")
  .assert.textContains("#toolbar-amount", "Items 1-12 of 48")
  }
}



