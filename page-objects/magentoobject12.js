module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      menEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/men.html"]',
        locateStrategy: 'xpath', 
      },
      hoodieEl: 'a[title="Hero Hoodie"]',
      sizeEl: '#option-label-size-143-item-168',
      colorEl: '#option-label-color-93-item-49',
      qtyEl: '#qty',
      addToCartBtn: '#product-addtocart-button',
      tankEl: 'a[title="Argus All-Weather Tank"]',
      cartEl: '.showcart',
      colorTankEl: '#option-label-color-93-item-52',
      deleteEl: '#shopping-cart-table > tbody:nth-child(3) > tr.item-actions > td > div > a.action.action-delete',
      acceptDeleteEl: '.action-accept',
      viewCartEl: '.viewcart',
      signInEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]',
        locateStrategy: 'xpath',
        },
      sendEl: '#send2',
      emailEl: '#email',
      passwordEl: '#pass',
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
    clickHoodieColor() {
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
    clickWeatherTank() {
      return this
      .click("@tankEl")
    },
    clickCart() {
      return this
      .click("@cartEl")
    },
    clickTankColor() {
      return this
      .click("@colorTankEl")
    },
    clickDelete() {
      return this
      .click("@deleteEl")
    },
    clickAccept() {
      return this
      .click("@acceptDeleteEl")
    },
    clickViewCart() {
      return this
      .click("@viewCartEl")
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
    clickSend() {
      return this
      .click("@sendEl")
    }
  }
}
  