module.exports = {
    "@tags": ["automationexercise20"],
    loginUserWithCorrectEmailAndPassword(browser) {
      const page = browser.page.automationexerciseobject20();
    
      page
      .navigate()
     
      browser
      .assert.visible(".logo")
      
      page
      .clickLogin()
      
      browser
      .assert.textMatches(".login-form", "Login to your account")
      
      page
      .typeEmail("warrockpremk@o2.pl")
      .typePassword("wojciacho")
      .clickLoginToAccount()

      browser
      .assert.textContains(".shop-menu", "Logged in as Wojciech")

      browser
      .assert.urlContains("https://automationexercise.com")
    },
  };
  