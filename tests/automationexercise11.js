module.exports = {
    "@tags": ["automationexercise11"],
    viewCartBrandProducts(browser) {
      const page = browser.page.automationexerciseobject11();
  
      page
      .navigate()
      .clickProducts()
      browser
      .assert.visible(".brands_products")
      .execute('scrollTo(0, 400)')
     
      page
      .clickPolo()

      browser
      .assert.textMatches(".features_items > .title", "BRAND - POLO PRODUCTS")
      .assert.urlContains("https://automationexercise.com/brand_products/Polo")

      page
      .clickBabyhug()

       browser
       .execute('scrollTo(0, 400)')
       .assert.urlContains("https://automationexercise.com/brand_products/Babyhug")
       .assert.visible(".features_items")
    },
  };
  