module.exports = {
    "@tags": ["automationexercise3"],
    contactUsForm(browser) {
      const page = browser.page.automationexerciseobject3();
      const email = "warrockpremk@o2.pl"
      const name = "Wojciech"
      const subject = "Testing"
      const message = "Testing this website"
  
      page
      .navigate()
      
      browser
      .assert.visible(".logo")

      page
      .clickContactUs()

      browser
      .assert.visible(".col-sm-12 > .text-center")

      page
      .typeName(name)
      .typeEmail(email)
      .typeSubject(subject)
      .typeMessage(message)
      .clickSubmit()

      browser
      .acceptAlert()
      .assert.visible(".status")

      page
      .clickHome()
      
      browser
      .assert.urlContains("https://automationexercise.com")
    },
  };
  