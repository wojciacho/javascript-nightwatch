module.exports = {
    "@tags": ["automationexercise22"],
    verifyProductQuantityInCart(browser) {
      const page = browser.page.automationexerciseobject22();
    
      page
      .navigate()
     
      browser
      .assert.visible(".logo")
      .execute('scrollTo(0, 600)')
      
      page
      .clickViewProduct()

      browser
      .assert.urlContains("https://automationexercise.com/product_details/1")
      
      page
      .setQuantity("4")
      .clickAddToCart()
      .clickCart()

      browser
      .assert.textMatches(".cart_quantity", "4")
    },
  };
  