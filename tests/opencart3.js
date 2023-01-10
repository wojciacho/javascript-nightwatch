module.exports = {
  "@tags": ["opencart3"],
  Opencart(browser) {
    const page = browser.page.opencartobject3();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")

    page
    .clickCameras()
    
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=33")
    .assert.visible("#product-list > div:nth-child(1) > form > div")
    .assert.visible("#product-list > div:nth-child(2) > form > div")
    .assert.textContains("div:nth-child(1) > form > div > div.content > div.description > div > span.price-new", "$98.00")
    .assert.textContains("div:nth-child(2) > form > div > div.content > div.description > div > span.price-new", "$98.00")

    page
    .clickCanon()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=product/product&language=en-gb&path=33&product_id=30")
    .assert.textContains(".col-sm > h1", "Canon EOS 5D")
    .assert.textContains("#content > div > div:nth-child(2) > ul:nth-child(2)", "Brand: Canon")

    page
    .clickCameras()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=33")

    page
    .clickNikon()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=product/product&language=en-gb&path=33&product_id=31")
    .assert.textContains(".col-sm > h1", "Nikon D300")
    .assert.textContains("#content > div > div:nth-child(2) > ul:nth-child(2)", "Availability: In Stock")
  },
};
