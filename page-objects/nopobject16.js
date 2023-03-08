module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: {
    clothingEl: {
      selector: '//a[@href="/clothing"]',
      locateStrategy: 'xpath',
    },
    shirtEl: 'div:nth-child(1) > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button',
    clickCartEl: '#add-to-cart-button-29',
    textEl: '#product_attribute_12',
    cartEl: '#bar-notification > div > p > a',
  },
  commands: {
    clickClothing() {
      return this
      .click("@clothingEl")
    },
    clickShirt() {
      return this
      .click("@shirtEl")
    },
    clickAddToCart() {
      return this
      .click("@clickCartEl")
    },
    typeText(value) {
      return this
      .clearValue("@textEl")
      .setValue("@textEl", value)
    },
    clickCart() {
      return this
      .click("@cartEl")
    }
  },
};
