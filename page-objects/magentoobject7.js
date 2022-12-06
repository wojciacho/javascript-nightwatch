module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      showCartEl: '.showcart',
      yogaProductsEl: '.home-main > span > .action'
    },
    commands: {
      clickCart() {
        return this
        .click("@showCartEl")
    },
    clickYogaProducts() {
      return this
      .click("@yogaProductsEl")
    }
  }
}
  