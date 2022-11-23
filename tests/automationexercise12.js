module.exports = {
    "@tags": ["automationexercise12"],
    searchProductsAndVerifyCartAfterLogin(browser) {
      const page = browser.page.automationexerciseobject12();
      const email = "warrockpremk@o2.pl"
      const password = "wojciacho"
  
      page
      .navigate()
      .clickProducts()

      browser
      .assert.urlContains("https://automationexercise.com/products")
      
      page
      .typeProduct("Sleeveless Dress")
      .clickSearch()

      browser
      .assert.textMatches(".single-products > .productinfo > p", "Sleeveless Dress")
      .execute('scrollTo(0, 400)')
      
      page
      .clickAddToCart()
      .clickSuccessBtn()
      .clickViewCart()

      browser
       .assert.visible("#product-3")

       page
       .clickLogin()
       .typeEmail(email)
       .typePassword(password)
       .submitLogin()
       .clickViewCart()

       browser
       .assert.visible("#product-3")
    },
  };
  