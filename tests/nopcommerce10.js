module.exports = {
  "@tags": ["nopcommerce10"],
  Opencart(browser) {
    const page = browser.page.nopobject10();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.visible("div.header-links > ul > li:nth-child(2) > a")

   page
   .clickLogin()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/login?returnUrl=%2F")
   .assert.visible(".page-title > h1")
   .assert.textContains(".page-title > h1", "Welcome, Please Sign In!")

   page
   .typeEmail("example@test123.com")
   .typePassword("WOJTAS12345!")
   .clickLoginBtn()
    

   browser
   .assert.urlContains("https://demo.nopcommerce.com")
   .assert.visible("div.header-links > ul > li:nth-child(1) > a")
   .assert.textContains("div.header-links > ul > li:nth-child(1) > a", "My account")
   .assert.visible("div.header-links > ul > li:nth-child(2) > a")
   .assert.textContains("div.header-links > ul > li:nth-child(2) > a", "Log out")

   page
   .clickLogout()

   browser
   .assert.urlContains("https://demo.nopcommerce.com")
   .assert.visible("div.header-links > ul > li:nth-child(1) > a")
   .assert.textContains("div.header-links > ul > li:nth-child(1) > a", "Register")
   .assert.visible("div.header-links > ul > li:nth-child(2) > a")
   .assert.textContains("div.header-links > ul > li:nth-child(2) > a", "Log in")
  },
};
