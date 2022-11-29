module.exports = {
    "@tags": ["automationexercise21"],
    loginUserWithIncorrectEmailAndPassword(browser) {
      const page = browser.page.automationexerciseobject21();
    
      page
      .navigate()
     
      browser
      .assert.visible(".logo")
      
      page
      .clickLogin()
      
      browser
      .assert.textMatches(".login-form", "Login to your account")
      
      page
      .typeEmail("testing@testing.com")
      .typePassword("testing")
      .clickLoginToAccount()

      browser
      .assert.textContains('form[action="/login"] > p', "Your email or password is incorrect!")

      browser
      .assert.urlContains("https://automationexercise.com/login")
    },
  };
  