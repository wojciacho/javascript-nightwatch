module.exports = {
    "@tags": ["automationexercise5"],
    verifySubscriptionInHomepage(browser) {
      const page = browser.page.automationexerciseobject5();
      const email = "wojciacho@example.com"
  
      page
      .navigate()
          
      browser
      .assert.visible(".logo")

      .moveToElement("#footer", 10, 10)
      .getLocationInView('#footer')
      .assert.visible('#footer')
      .assert.textMatches(".single-widget", "SUBSCRIPTION")

      page
      .typeEmail(email)
      .clickSubscribe()
        
      browser
      .assert.visible(".alert-success")
      .assert.textMatches(".alert-success", "You have been successfully subscribed!")
        },
      };
      