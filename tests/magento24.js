module.exports = {
  "@tags": ["magento24"],
  advancedSearch(browser) {
  const page = browser.page.magentoobject24();
  
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
  .typeName("Aether Gym Pant")
  .typeSKU("MP11")
  .typePrice("50")
  .typePriceTo("75")
  .clickSearch()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/catalogsearch/advanced/result/?name=Aether+Gym+Pant&sku=MP11&description=&short_description=&price%5Bfrom%5D=50&price%5Bto%5D=75")
  .assert.textContains(".found", "1 item were found")
  .assert.textContains("#toolbar-amount ", "1 Item")
  .assert.visible(".product-item")
}
}



