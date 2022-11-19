module.exports = {
    "@tags": ["automationexercise8"],
    addProductsInCart(browser) {
      const page = browser.page.automationexerciseobject8();
    
      page
      .navigate()
      
      browser
      .assert.visible(".logo")

      page
      .clickTestCases()

      browser
      .assert.urlContains("https://automationexercise.com/test_cases")
    },
  };
  