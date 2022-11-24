module.exports = {
    "@tags": ["automationexercise14"],
    addToCartFromRecommendedItems(browser) {
      const page = browser.page.automationexerciseobject14();
    
      page
      .navigate()
     
      browser
      //.execute('scrollTo(0, 11000)')
      .moveToElement(".form-row", 0, 0)
      //.moveToElement(".recommended_items > .carousel > .carousel-inner > .item > .col-sm-4 > .product-image-wrapper > .single-products > .productinfo > .add-to-cart", 10, 10)
      .assert.textMatches(".recommended_items > h2", "RECOMMENDED ITEMS")
      
      page
      .clickAddToCart()
      .clickButtonOk()
      .clickCart()

      browser
      .assert.visible(".cart_product")
    },
  };
  