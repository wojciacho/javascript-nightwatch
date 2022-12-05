module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      womenEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/women.html"]',
        locateStrategy: "xpath",
      },
      radiantTeeEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/radiant-tee.html"]',
        locateStrategy: "xpath",
      },
      sizeEl: '#option-label-size-143-item-167',
      colorEl: '#option-label-color-93-item-50',
      qtyEl: '#qty',
      addToCartBtn: '#product-addtocart-button',
      showCartEl: '.showcart',
      checkoutEl: '#top-cart-btn-checkout',
      showEl: '.items-in-cart'
    },
    commands: {
      clickWomen() {
        return this
        .click("@womenEl")
      },
      clickRadiantTee() {
        return this
        .click("@radiantTeeEl")
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
        .click("@showCartEl")
      },
      clickCheckout() {
        return this
        .click("@checkoutEl")
      },
      showItems() {
        return this
        .click("@showEl")
      }
    },
  };
  