module.exports = {
  "@tags": ["magento25"],
  advancedSearch2(browser) {
  const page = browser.page.magentoobject25();
  
  page
  .navigate()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com")
  .execute('scrollTo(0, 2400)')

  page
  .clickAdvancedSearch()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/catalogsearch/advanced/")

  page
  .typeSKU("24-WG085_Group")
  .clickSearch()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/catalogsearch/advanced/result/?name=&sku=24-WG085_Group&description=&short_description=&price%5Bfrom%5D=&price%5Bto%5D=")
  .assert.textContains(".found", "1 item were found")
  .assert.textContains("#toolbar-amount ", "1 Item")
  .assert.visible(".product-item")
}
}