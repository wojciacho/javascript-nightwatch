module.exports = {
    "@tags": ["automationexercise2"],
    registerUserWithExistingEmail(browser) {
      const page = browser.page.automationexerciseobject2();
      const email = "warrockpremk@o2.pl"
      const name = "Wojciech"
  
      page
      .navigate()
      
      browser
      .assert.visible(".logo")

      page
      .clickSignIn()

      browser
      .assert.textContains(".signup-form", "New User Signup!")

      page
      .typeExistingName(name)
      .typeExistingEmail(email)
      .clickSignUp()

      browser
      .assert.textContains("p", "Email Address already exist!")
    },
  };
  