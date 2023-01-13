module.exports = {
  "@tags": ["opencart9"],
  Opencart(browser) {
    const page = browser.page.opencartobject9();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
   
    page
    .clickPhone()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=product/product&language=en-gb&product_id=40")

    browser
    .assert.visible("#product-info > ul > li:nth-child(2) > a")
    .assert.textContains("#product-info > ul > li:nth-child(2) > a", "iPhone")
    .assert.visible(".col-sm > h1")
    .assert.textContains(".col-sm > h1", "iPhone")
    .execute('scrollTo(0, 700)')
    .assert.visible(".tab-content > #tab-description")
    .assert.textContains(".tab-content >#tab-description", "iPhone is a revolutionary new mobile phone")
    
    page
    .clickReviews()

    browser
    .assert.textContains("#review > .text-center", "There are no reviews for this product.")

    page
    .typeName("Wojciech")
    .typeReview("Very good product. I am in love with this phone.")
    .clickRating()
    .clickContinue()

    browser
    .assert.visible(".alert-success")
    .assert.textContains(".alert-success", "Thank you for your review. It has been submitted to the webmaster for approval.")
  },
};
