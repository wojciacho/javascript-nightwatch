module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      productsEl: {
        selector: '//a[@href="/products"]',
        locateStrategy: "xpath"
      },
      addToCartFirstEl: 'a[data-product-id="1"]',
      continueShoppingEl: ".btn-block",
      addToCartSecondEl: 'a[data-product-id="2"]',
      viewCartEl: {
        selector: ' //a[@href="/view_cart"]',
        locateStrategy: "xpath"
      },
      deleteFirstEl: "#product-1 > .cart_delete > .cart_quantity_delete",
      deleteSecondEl: "#product-2 > .cart_delete > .cart_quantity_delete"
    },
    commands: {
      clickProducts() {
        return this
        .click("@productsEl");
      },
      clickAddToCartFirstEl() {
        return this
        .click("@addToCartFirstEl")
      },
      clickContinueShopping() {
        return this
        .click("@continueShoppingEl")
      },
      clickAddToCartSecondEl() {
        return this
        .click("@addToCartSecondEl")
      },
      clickViewCart() {
        return this
        .click("@viewCartEl")
      },
      clickDeleteFirstEl() {
        return this
        .click("@deleteFirstEl")
      },
      clickDeleteSecondEl() {
        return this
        .click("@deleteSecondEl")
      },
    },
  };
  