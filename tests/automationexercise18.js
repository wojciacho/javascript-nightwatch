module.exports = {
    "@tags": ["automationexercise18"],
    placeOrderLoginBeforeCheckout(browser) {
      const page = browser.page.automationexerciseobject18();
    
      page
      .navigate()
     
      browser
      .assert.visible(".logo")
      
      page
      .clickLogin()
      .typeEmail("warrockpremk@o2.pl")
      .typePassword("wojciacho")
      .clickLoginToAccount()

      browser
      .assert.textContains(".shop-menu", "Logged in as Wojciech")
      .execute('scrollTo(0, 600)')

      page
      .clickAddToCart()
      .clickButtonOk()
      .clickCart()

      browser
      .assert.urlContains("https://automationexercise.com/view_cart")

      page
      .clickCheckout()

      browser
      .assert.textMatches("#address_delivery > .address_firstname", "Wojciech Wojciechowski")
      .assert.textMatches("#address_delivery > .address_city", "Chicago Illinois 60007")
      .assert.textMatches("#address_delivery > .address_country_name", "United States")
      .assert.textMatches("#address_delivery > .address_phone", "123456789")

      .assert.textMatches("#address_invoice > .address_firstname", "Wojciech Wojciechowski")
      .assert.textMatches("#address_invoice > .address_city", "Chicago Illinois 60007")
      .assert.textMatches("#address_invoice > .address_country_name", "United States")
      .assert.textMatches("#address_invoice > .address_phone", "123456789")

      .assert.textMatches("#product-1 > .cart_description > h4", "Blue Top")

      page
      .typeComment("Thank you")
      .clickPlaceOrder()
      .typeCardName("Example")
      .typeCardNumber("0000")
      .typeCvc("311")
      .typeExpirationM("06")
      .typeExpirationY("2030")
      .clickConfirmOrder()

      browser
      .assert.textMatches(".col-sm-9", "Congratulations! Your order has been confirmed!")
      .pause(1000)

      page
      .clickContinue()

      browser
      .assert.urlContains("https://automationexercise.com")
    },
  };
  