module.exports = {
  "@tags": ["opencart6"],
  Opencart(browser) {
    const page = browser.page.opencartobject6();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")

    page
    .clickCart()
    
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=checkout/cart&language=en-gb")
    .assert.visible("#error-not-found > ul > li:nth-child(2) > a")
    .assert.textContains("#error-not-found > ul > li:nth-child(2) > a", "Shopping Cart")
    .assert.visible("#content > h1")
    .assert.textContains("#content > h1", "Shopping Cart")
    .assert.visible("#content > p")
    .assert.textContains("#content > p", "Your shopping cart is empty!")

    page
    .clickContinue()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
  },
};
