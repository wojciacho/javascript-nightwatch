module.exports = {
  "@tags": ["nopcommerce5"],
  Opencart(browser) {
    const page = browser.page.nopobject5();

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
    .clickOwnComputer()

    browser
    .assert.urlContains("https://demo.nopcommerce.com/build-your-own-computer")
    .assert.visible(".product-name > h1")
    .assert.textContains(".product-name > h1", "Build your own computer")

    page
    .clickProcessor()
    .clickRam()
    .clickHDD()
    .clickOS()

    browser
    .assert.textContains("#price-value-1", "$1,485.00")
  },
};
