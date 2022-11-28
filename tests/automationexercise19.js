module.exports = {
    "@tags": ["automationexercise19"],
    registerUser(browser) {
      const page = browser.page.automationexerciseobject19();
    
      page
      .navigate()
     
      browser
      .assert.visible(".logo")
      
      page
      .clickLogin()
      
      browser
      .assert.textMatches(".signup-form", "New User Signup!")
      
      page
      .typeName("Wojciech")
      .typeEmail("example@example2.com")
      .clickSignUp()

      browser
      .assert.textMatches(".login-form > .text-center", "ENTER ACCOUNT INFORMATION")

      page
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
  