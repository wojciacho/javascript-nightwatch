module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      hoodieEl: 'a[title="Hero Hoodie"]',
      sizeEl: '#option-label-size-143-item-168',
      colorEl: '#option-label-color-93-item-52',
      qtyEl: '#qty',
      emailEl: '#email',
      passwordEl: '#pass',
      submitEl: '#send2',
      addToCartEl: '#product-addtocart-button',
      cartEl: '.showcart',
      checkoutEl: '#top-cart-btn-checkout',
      signInEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]',
        locateStrategy: 'xpath',
      },
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
  