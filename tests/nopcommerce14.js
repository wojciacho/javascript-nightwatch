module.exports = {
  "@tags": ["nopcommerce14"],
  Opencart(browser) {
    const page = browser.page.nopobject14();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.visible("div.header-links > ul > li:nth-child(1) > a")

   page
   .clickRegister()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/register?returnUrl=%2F")
   .assert.visible(".page-title > h1")
   .assert.textContains(".page-title > h1", "Register")

   page
   .clickGender()
   .typeFirstName("Wojciech")
   .pickDay()
   .pickMonth()
   .pickYear()
   .typeEmail("example@test123.com")
   .clickNewsletter()
   .typePassword("WOJTAS12345!")
   .typeConfirmPassword("WOJTAS12345!")
   .clickRegisterBtn()
    

   browser
   .assert.visible("#LastName-error")
   .assert.textContains("#LastName-error", "Last name is required.")
  },
};
