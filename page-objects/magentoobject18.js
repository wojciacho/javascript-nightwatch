module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      hoodieEl: 'a[title="Hero Hoodie"]',
      sizeEl: '#option-label-size-143-item-168',
      colorEl: '#option-label-color-93-item-52',
      qtyEl: '#qty',
      emailEl: '#login-email',
      passwordEl: '#login-password',
      submitEl: '#modal-content-7 > div > div > div.block-content > form > div.actions-toolbar > div.primary > button',
      addToCartEl: '#product-addtocart-button',
      cartEl: '.showcart',
      checkoutEl: '#top-cart-btn-checkout',
      signInEl: '.action-auth-toggle',
      nextBtn: '.continue',
      placeOrderEl: '.primary > .checkout',
      continueEl: '.primary > .continue'
    },
    commands: {
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
      .click("@addToCartEl")
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
    clickSubmit() {
      return this
      .click("@submitEl")
    },
    clickNext() {
      return this
      .click("@nextBtn")
    },
    clickPlaceOrder() {
      return this
      .click("@placeOrderEl")
    },
    clickContinue() {
      return this
      .click("@continueEl")
    }
  }
}
  