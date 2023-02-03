module.exports = {
  "@tags": ["nopcommerce3"],
  Opencart(browser) {
    const page = browser.page.nopobject3();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
  
    page
    .clickComputer()

    browser
    .assert.urlContains("https://demo.nopcommerce.com/computers")
    .assert.visible("div.listbox > ul > li.active.last > ul > li:nth-child(1) > a")

    page
    .clickDesktops()

    browser
    .assert.urlContains("https://demo.nopcommerce.com/desktops")

    page
    .clickAddToCartVanquish()

    browser
    .assert.visible(".content")
    .assert.textContains(".content", "The product has been added to your shopping cart")

    page
    .clickCart()

    browser
    .assert.urlContains("https://demo.nopcommerce.com/cart")
    .assert.visible(".sku-number")
    .assert.textContains(".sku-number", "DS_VA3_PC")
    .assert.visible(".product-name")
    .assert.textContains(".product-name", "Digital Storm VANQUISH 3 Custom Performance PC")
    .assert.visible(".product-unit-price")
    .assert.textContains(".product-unit-price", "$1,259.00")
    .assert.visible(".qty-input")
    .assert.valueContains(".qty-input", "1")
    .assert.visible(".product-subtotal")
    .assert.textContains(".product-subtotal", "$1,259.00")
  },
};
