module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      hoodieEl: 'a[title="Hero Hoodie"]',
      compareEl: '.product-addto-links > .tocompare',
    },
    commands: {
    clickHoodie() {
      return this
      .click("@hoodieEl")
    },
    clickAddToCompare() {
      return this
      .click("@compareEl")
    }
  }
}
  