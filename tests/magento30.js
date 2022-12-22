module.exports = {
  "@tags": ["magento30"],
  checkShoppingOptions(browser) {
  const page = browser.page.magentoobject30();
  
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
  .pause(1000)

  page
  .clickCategory()
  .clickJackets()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html?cat=14")
  .assert.textEquals(".toolbar-number", "11")
  .assert.visible(".filter-label")
  .assert.textEquals(".filter-value", "Jackets")

  page
  .clickClear()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html")
}
}



