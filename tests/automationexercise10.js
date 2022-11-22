module.exports = {
    "@tags": ["automationexercise10"],
    viewCategoryProducts(browser) {
      const page = browser.page.automationexerciseobject10();
  
      page
      .navigate()
      
      browser
      .assert.visible(".category-products")
     
      .execute('scrollTo(0, 600)')

      page
      .clickWomen()
      .clickDress()
      
      browser
      .assert.textMatches(".features_items > .title", "WOMEN - DRESS PRODUCTS")
      .assert.urlContains("https://automationexercise.com/category_products/1")

      page
      .clickMen()
      .clickJeans()

       browser
       .assert.urlContains("https://automationexercise.com/category_products/6")
    },
  };
  