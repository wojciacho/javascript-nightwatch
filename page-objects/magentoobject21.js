module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    hoodieEl: 'a[title="Hero Hoodie"]',
    compareEl: '.product-addto-links > .tocompare',
    comparisonEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/catalog/product_compare/"]',
      locateStrategy: 'xpath',
    },
    logoEl: '.logo',
    tanktopEl: 'a[title="Argus All-Weather Tank"]',
  },
  commands: {
  clickHoodie() {
    return this
    .click("@hoodieEl")
  },
  clickAddToCompare() {
    return this
    .click("@compareEl")
  },
  clickComparison() {
    return this
    .click("@comparisonEl")
  },
  clickHome() {
    return this
    .click("@logoEl")
  },
  clickTanktop() {
    return this
    .click("@tanktopEl")
  }
}
}
