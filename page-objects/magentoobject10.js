module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      loginEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]',
        locateStrategy: 'xpath', 
      },
      hoodieEl: '.product-item-name > a[title="Hero Hoodie"]',
      sizeEl: '#option-label-size-143-item-168',
      colorEl: '#option-label-color-93-item-53',
      qtyEl: '#qty', 
      addToCartBtn: '#product-addtocart-button',
      cartEl: '.showcart',
      checkoutEl: '#top-cart-btn-checkout',
      signInEl: '#send2',
      emailEl: '#email',
      passwordEl: '#pass',
      itemCartEl: '.items-in-cart',
      menEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/men.html"]',
        locateStrategy: 'xpath', 
      },
    },
    commands: {
    clickLogin() {
      return this
      .click("@loginEl")
    },
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
    clickCartItem() {
      return this
      .click("@itemCartEl")
    }
  }
}
  