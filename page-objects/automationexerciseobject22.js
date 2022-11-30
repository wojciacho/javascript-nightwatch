module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      viewProductEl: {
        selector: '//a[@href="/product_details/1"]',
        locateStrategy: "xpath"
      },
      quantityEl: '#quantity',
      btnAddToCartEl: 'span > .btn-default',
      modalEl: '.close-modal',
      cartEl: {
        selector: '//a[@href="/view_cart"]',
        locateStrategy: "xpath"
    },
  },
    commands: {
     clickViewProduct() {
      return this
      .click("@viewProductEl")
     },
     setQuantity(value) {
      return this
      .clearValue("@quantityEl")
      .setValue("@quantityEl", value)
     },
     clickAddToCart() {
      return this
      .click("@btnAddToCartEl")
     },
     clickCart() {
      return this
      .click("@modalEl")
      .click("@cartEl")
     }
  }
}