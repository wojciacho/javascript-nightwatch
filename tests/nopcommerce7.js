module.exports = {
  "@tags": ["nopcommerce7"],
  Opencart(browser) {
    const page = browser.page.nopobject7();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.visible("#small-searchterms")
    .execute('scrollTo(0, 3400)')
    .assert.visible(".footer")

    .assert.visible(".information > .title")
    .assert.textContains(".information > .title", "Information")

    .assert.visible(".customer-service > .title")
    .assert.textContains(".customer-service > .title", "Customer service")

    .assert.visible(".my-account > .title")
    .assert.textContains(".my-account > .title", "My account")

    .assert.visible(".follow-us > .social > .title")
    .assert.textContains(".follow-us > .social > .title", "Follow us")

    .assert.visible(".footer-powered-by")
    .assert.textContains(".footer-powered-by", "Powered by nopCommerce")
  },
};
