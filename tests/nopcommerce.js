module.exports = {
  "@tags": ["nopcommerce"],
  Opencart(browser) {
    const page = browser.page.nopobject();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.selected("#customerCurrency > option:nth-child(1)")
    .assert.visible("#customerCurrency")

    page
    .clickCurrency()

    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.selected("#customerCurrency > option:nth-child(2)")
    .assert.visible("#customerCurrency")
  },
};
