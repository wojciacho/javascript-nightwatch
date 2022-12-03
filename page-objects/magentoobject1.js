module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      tankEl: 'a[title="Breathe-Easy Tank"]',
      sizeEl: '#option-label-size-143-item-168',
      colorEl: '#option-label-color-93-item-57',
      qtyEl: '#qty',
      addToCartBtnEl: '#product-addtocart-button',
      showCartEl: '.showcart',
      checkoutEl: '#top-cart-btn-checkout',
      cartTitleEl: '.items-in-cart > .title',
    },
    commands: {
      clickTank() {
        return this
        .click("@tankEl")
      },
      chooseSize() {
        return this
        .click("@sizeEl")
      },
      chooseColor() {
        return this
        .click("@colorEl")
      },
      setQuantity(value) {
        return this
        .clearValue("@qtyEl")
        .setValue("@qtyEl", value)
      },
      clickAddToCart() {
        return this
        .click("@addToCartBtnEl")
      },
      showCart() {
        return this
        .click("@showCartEl")
      },
      clickCheckout() {
        return this
        .click("@checkoutEl")
      },
      clickCartTitle() {
        return this
        .click("@cartTitleEl")
      }
    },
  };
  