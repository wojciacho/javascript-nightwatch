module.exports = {
    "@tags": ["automationexercise15"],
    verifyAddressDetailsInCheckoutPage(browser) {
      const page = browser.page.automationexerciseobject15();
    
      page
      .navigate()
     
      browser
      .assert.visible(".logo")
      
      page
      .clickLogin()
      .typeName("Wojciech")
      .typeEmail("example@example1.com")
      .clickSignUp()
      .clickGender()
      .typePassword("wojtas")
      .setDays()
      .setMonths()
      .setYears()
      .typeFirstName("Wojciech")
      .typeLastName("Wojciechowski")

      browser
      .moveToElement("#footer", 10, 10)
      
      page
      .typeAddress("Main street")
      .setCountry()
      .typeState("IL")
      .typeCity("Chicago")
      .typeZipCode("12345")
      .typePhone("123456789")
      .clickCreateAccount()

      browser
      .assert.textMatches(".col-sm-9", "ACCOUNT CREATED!")

      page
      .clickContinue()
      
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
      .assert.textMatches("#address_delivery > .address_city", "Chicago IL 12345")
      .assert.textMatches("#address_delivery > .address_country_name", "United States")
      .assert.textMatches("#address_delivery > .address_phone", "12345678")

      .assert.textMatches("#address_invoice > .address_firstname", "Wojciech Wojciechowski")
      .assert.textMatches("#address_invoice > .address_city", "Chicago IL 12345")
      .assert.textMatches("#address_invoice > .address_country_name", "United States")
      .assert.textMatches("#address_invoice > .address_phone", "12345678")

      page
      .clickDeleteAccount()

      browser
      .assert.textMatches(".col-sm-9", "ACCOUNT DELETED!")

      page
      .clickContinue()

      browser
      .assert.urlContains("https://automationexercise.com")
    },
  };
  