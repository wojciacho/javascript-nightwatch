module.exports = {
    "@tags": ["automationexercise1"],
    AutomationExercise(browser) {
      const page = browser.page.automationexerciseobject1();
      const email = "warrockpremk@o2.pl"
      const password = "wojciacho"
  
      page
      .navigate()
      
      browser
      .assert.visible(".logo")

      page
      .clickSignIn()

      browser
      .assert.textContains("h2", "Login to your account")

      page
      .typeEmail(email)
      .typePassword(password)
      .clickLogin()

      browser
      .assert.textContains(".shop-menu", "Logged in as Wojciech")

      page
      .clickLogOut()
      
      browser
      .assert.urlContains("https://automationexercise.com/login")
    },
  };
  