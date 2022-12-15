module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      hoodieEl: 'a[title="Hero Hoodie"]',
      emailEl: '#email',
      passwordEl: '#pass',
      submitEl: '#send2',
      signInEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]',
        locateStrategy: 'xpath',
      },
      customerEl: 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button',
      myAccountEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/"]',
        locateStrategy: 'xpath',
      },
      wishlistEl: '#block-collapsible-nav > ul > li:nth-child(4) > a',
      homeEl: '.logo',
      addWishlistEl: '.product-addto-links >.towishlist',
      deleteWishlistEl: '.actions-secondary > .btn-remove',
    },
    commands: {
    clickHoodie() {
      return this
      .click("@hoodieEl")
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
    clickCustomer() {
      return this
      .click("@customerEl")
    },
    clickMyAccount() {
      return this
      .click("@myAccountEl")
    },
    clickMyWishlist() {
      return this
      .click("@wishlistEl")
    },
    clickHome() {
      return this
      .click("@homeEl")
    },
    clickAddToWishlist() {
      return this
      .click("@addWishlistEl")
    },
    clickDeleteFromWishlist() {
      return this
      .click("@deleteWishlistEl")
    }
  }
}
  