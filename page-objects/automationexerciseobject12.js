module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      productsEl: {
        selector: '//a[@href="/products"]',
        locateStrategy: "xpath"
      },
      inputEl: 'input[type="text"]',
      searchBtn: '#submit_search',
      addToCartEl: '.productinfo > .add-to-cart',
      viewCartEl: {
        selector: '//a[@href="/view_cart"]',
        locateStrategy: "xpath",
      },
      loginEl: {
        selector: '//a[@href="/login"]',
        locateStrategy: "xpath"
      },
      emailEl: 'form[action="/login"] > input[type="email"]',
      passwordEl: 'form[action="/login"] > input[type="password"]',
      submitBtn: 'form[action="/login"] > button[type="submit"]',
      successBtn: ".modal-footer > .btn-success"
    },
    commands: {
      clickProducts() {
        return this
        .click("@productsEl");
      },
      typeProduct(value) {
        return this
        .clearValue("@inputEl")
        .setValue("@inputEl", value)
      },
      clickSearch() {
        return this
        .click("@searchBtn")
      },
      clickAddToCart() {
        return this
        .click("@addToCartEl")
      },
      clickViewCart() {
        return this
        .click("@viewCartEl")
      },
      clickLogin() {
        return this
        .click("@loginEl")
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
      submitLogin() {
        return this
        .click("@submitBtn")
      },
      clickSuccessBtn() {
        return this
        .click("@successBtn")
      }
    },
  };
  