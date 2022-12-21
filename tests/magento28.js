module.exports = {
  "@tags": ["magento28"],
  checkAboutUsPage(browser) {
  const page = browser.page.magentoobject28();
  
  page
  .navigate()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com")
  .execute('scrollTo(0, 2400)')

  page
  .clickAboutUs()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/about-us")
  .assert.textEquals(".base", "About us")
  .assert.textContains(".columns", "This site is hosted by SoftwareTestingBoard.com")
}
}



