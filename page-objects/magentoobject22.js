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
    signInEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]',
      locateStrategy: 'xpath',
    },
    emailEl: '#email',
    passwordEl: '#pass',
    submitEl: '#send2',
    deleteProductEl: '.delete',
    acceptEl: '.action-accept'
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
  },
  clickSignIn() {
  return this
  .click("@signInEl")
  },
  typeEmail(value) {
    return this
    .clearValue("@emailEl")
    .setValue("@emailEl", value)
  },
  typePassword(value) {
    return this
    .clearValue("@passwordEl")
    .setValue("@passwordEl", value)
  },
  clickSubmit() {
    return this
    .click("@submitEl")
  },
  clickDeleteProduct() {
    return this
    .click("@deleteProductEl")
  },
  clickAccept() {
    return this
    .click("@acceptEl")
  }
}
}
