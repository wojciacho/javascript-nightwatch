module.exports = {
  "@tags": ["magento26"],
  advancedSearch3(browser) {
  const page = browser.page.magentoobject26();
  
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
  .typeName("hoodie")

  .typePrice("1")
  .typePriceTo("45")
  .clickSearch()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/catalogsearch/advanced/result/?name=hoodie&sku=&description=&short_description=&price%5Bfrom%5D=1&price%5Bto%5D=45")
  .assert.textContains(".found", "3 items were found")
  .assert.textContains("#toolbar-amount ", "3 Items")
  .execute('scrollTo(0, 500)')
  .assert.textContains('div[data-product-id="174"]', "$42.00")
  .assert.textContains('div[data-product-id="1108"]', "$42.00")
  .assert.textContains('div[data-product-id="142"]', "$42.00")
  .assert.visible(".product-item")
}
}



