module.exports = {
    "@tags": ["automationexercise4"],
    searchProduct(browser) {
      const page = browser.page.automationexerciseobject4();
      const product = "Blue Top"
  
      page
      .navigate()
      
      browser
      .assert.visible(".logo")

      page
      .clickProducts()

      browser
      .assert.urlContains("https://automationexercise.com/products")

      page
      .typeName(product)
      .clickSearch()

      browser
      .assert.visible(".features_items > .text-center")
      page
      .assert.visible(".features_items")
      .assert.textMatches(".productinfo", "Blue Top")
    },
  };
  