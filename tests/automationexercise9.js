module.exports = {
    "@tags": ["automationexercise9"],
    removeProductsFromCart(browser) {
      const page = browser.page.automationexerciseobject9();
  
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
       .assert.urlContains("https://automationexercise.com/view_cart")

       page
       .clickDeleteFirstEl()
       .pause(500)
       .clickDeleteSecondEl()
       .pause(500)

       browser
       .assert.textMatches("#empty_cart", "Cart is empty! Click here to buy products.")
    },
  };
  