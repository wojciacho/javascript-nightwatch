module.exports = {
    "@tags": ["automationexercise7"],
    addProductsInCart(browser) {
      const page = browser.page.automationexerciseobject7();
    
      page
      .navigate()
      
      browser
      .assert.visible(".logo")

      page
      .clickProducts()

      browser
      .execute('scrollTo(0, 600)')
   
       page
       .clickAddToCartFirstEl()
       .clickContinueShopping()
     
       browser
       .execute('scrollTo(0, 600)')

       page
       .clickAddToCartSecondEl()
       .clickViewCart()
      
      browser
      .assert.textMatches("#product-1 > .cart_description", "Blue Top")
      .assert.textMatches("#product-1 > .cart_price", "Rs. 500")
      .assert.textMatches("#product-1 > .cart_total", "Rs. 500")
      .assert.textMatches("#product-1 > .cart_quantity > .disabled", "1")

      .assert.textMatches("#product-2 > .cart_description", "Men Tshirt")
      .assert.textMatches("#product-2 > .cart_price", "Rs. 400")
      .assert.textMatches("#product-2 > .cart_total", "Rs. 400")
      .assert.textMatches("#product-2 > .cart_quantity > .disabled", "1")
    },
  };
  