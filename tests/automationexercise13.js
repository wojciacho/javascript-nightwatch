module.exports = {
    "@tags": ["automationexercise13"],
    addReviewOnProduct(browser) {
      const page = browser.page.automationexerciseobject13();
    
      page
      .navigate()
      .clickProducts()

      browser
      .assert.urlContains("https://automationexercise.com/products")
      .execute('scrollTo(0, 600)')
      
      page
      .clickViewProduct()

      browser
      .assert.textMatches(".nav-tabs > .active", "WRITE YOUR REVIEW")
      .execute('scrollTo(0, 600)')

      page
      .typeName("Wojciech")
      .typeEmail("example@example.com")
      .typeReview("I like it")
      .clickSubmit()

      browser
      .assert.textMatches(".col-md-12 > .alert-success", "Thank you for your review.")
    },
  };
  