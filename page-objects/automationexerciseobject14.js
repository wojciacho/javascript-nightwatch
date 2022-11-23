module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      addToCartEl: ".active > .col-sm-4 > .product-image-wrapper > .single-products > .productinfo > .add-to-cart",
      viewCartEl: {
        selector: '//a[@href="/view_cart"]',
        locateStrategy: "xpath"
      },
      btnSuccess: ".modal-footer > .btn-success",
    },
    commands: {
      clickAddToCart() {
        return this
        .click("@addToCartEl");
      },
      clickCart() {
        return this
        .click("@viewCartEl")
      },
      clickButtonOk() {
        return this
        .click("@btnSuccess")
      }
    },
  };
  