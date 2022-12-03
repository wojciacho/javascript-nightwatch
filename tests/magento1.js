module.exports = {
    "@tags": ["magento1"],
    checkItemInCart(browser) {
      const page = browser.page.magentoobject1();
    
      page
      .navigate()

      browser
      .assert.urlContains("https://magento.softwaretestingboard.com/")
      .execute('scrollTo(0, 1700)')

      page
      .clickTank()

      browser
      .assert.urlContains("https://magento.softwaretestingboard.com/breathe-easy-tank.html")

      page
      .chooseSize()
      .chooseColor()
      .setQuantity("2")

      browser
      .assert.visible("#product-addtocart-button")

      page
      .clickAddToCart()

      browser
      .assert.textMatches(".message-success", "You added Breathe-Easy Tank to your shopping cart.")

      page
      .showCart()
      .clickCheckout()
      .clickCartTitle()

      browser
      .assert.urlContains("https://magento.softwaretestingboard.com/checkout/")
      .assert.textMatches(".opc-block-summary > .title", "Order Summary")
      .assert.textEquals(".cart-price", "$68.00")
      .assert.textMatches(".minicart-items-wrapper", "Breathe-Easy Tank")
      .assert.textMatches(".details-qty > .value", "2")
    },
  };
  