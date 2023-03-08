module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: {
    booksEl: {
      selector: '//a[@href="/books"]',
      locateStrategy: 'xpath',
    },
    addToCartEl: 'div:nth-child(1) > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button',
    clickCartEl: '#bar-notification > div > p > a' 
  },
  commands: {
    clickBooks() {
      return this
      .click("@booksEl")
    },
    clickAddToCart() {
      return this
      .click("@addToCartEl")
    },
    clickCart() {
      return this
      .click("@clickCartEl")
    }
  },
};
