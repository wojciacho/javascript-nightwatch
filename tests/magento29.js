module.exports = {
  "@tags": ["magento29"],
  checkSortingFunctionality(browser) {
  const page = browser.page.magentoobject29();
  
  page
  .navigate()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com")
  .execute('scrollTo(0, 2400)')

  page
  .clickMen()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men.html")
  
  page
  .clickTops()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html")

  page
  .clickSorter()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html?product_list_order=price")
  .assert.textEquals("#product-price-724 > .price", "$18.00")
  .assert.textEquals("#product-price-718 > .price", "$18.00")
  .assert.textEquals("#product-price-712 > .price", "$18.00")
  .execute('scrollTo(0, 1700)')
  .assert.textEquals("#product-price-574 > .price", "$28.00")
  .assert.textEquals("#product-price-494 > .price", "$28.00")
  .assert.textEquals("#product-price-706 > .price", "$29.00")
}
}



