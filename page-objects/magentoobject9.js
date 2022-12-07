module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      menEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/men.html"]',
        locateStrategy: 'xpath', 
      },
      hoodieEl: '.product-item-name > a[title="Hero Hoodie"]',
      sizeEl: '#option-label-size-143-item-168',
      colorEl: '#option-label-color-93-item-53',
      qtyEl: '#qty', 
      addToCartBtn: '#product-addtocart-button',
      cartEl: '.showcart',
      checkoutEl: '#top-cart-btn-checkout',
      signInEl: '.action-auth-toggle',
      emailEl: '#login-email',
      passwordEl: '#login-password',
      loginEl: '#modal-content-7 > div > div > div.block-content > form > div.actions-toolbar > div.primary > button > span',
      itemCartEl: '.items-in-cart',
    },
    commands: {
    clickMen() {
      return this
      .click("@menEl")
    },
    clickHoodie() {
      return this
      .click("@hoodieEl")
    },
    clickSize() {
      return this
      .click("@sizeEl")
    },
    clickColor() {
      return this
      .click("@colorEl")
    },
    typeQuantity(value) {
      return this
      .clearValue("@qtyEl")
      .setValue("@qtyEl", value)
    },
    clickAddToCart() {
      return this
      .click("@addToCartBtn")
    },
    clickCart() {
      return this
      .click("@cartEl")
    },
    clickCheckout() {
      return this
      .click("@checkoutEl")
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
    clickLogin() {
      return this
      .click("@loginEl")
    },
    clickCartItem() {
      return this
      .click("@itemCartEl")
    }
  }
}
  