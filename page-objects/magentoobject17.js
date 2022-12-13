module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      hoodieEl: 'a[title="Hero Hoodie"]',
      wishlistEl: '.product-addto-links > a[data-action="add-to-wishlist"]',
      emailEl: '#email',
      passwordEl: '#pass',
      submitEl: '#send2'
    },
    commands: {
    clickHoodie() {
      return this
      .click("@hoodieEl")
    },
    clickAddToWishList() {
      return this
      .click("@wishlistEl")
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
    }
  }
}
  