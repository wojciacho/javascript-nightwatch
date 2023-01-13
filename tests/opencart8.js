module.exports = {
  "@tags": ["opencart8"],
  Opencart(browser) {
    const page = browser.page.opencartobject8();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
   
    page
    .clickMacbook()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=product/product&language=en-gb&product_id=43")

    browser
    .assert.visible("#product-info > ul > li:nth-child(2) > a")
    .assert.textContains("#product-info > ul > li:nth-child(2) > a", "MacBook")
    .assert.visible(".col-sm > h1")
    .assert.textContains(".col-sm > h1", "MacBook")
    .execute('scrollTo(0, 700)')
    .assert.visible(".tab-content > #tab-description")
    .assert.textContains(".tab-content > #tab-description", "Intel Core 2 Duo processor")
    .assert.textContains(".tab-content > #tab-description", "1GB memory, larger hard drives")
    .assert.textContains(".tab-content > #tab-description", "Built-in iSight camera")
  },
};
