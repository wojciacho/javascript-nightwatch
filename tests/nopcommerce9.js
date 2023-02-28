module.exports = {
  "@tags": ["nopcommerce9"],
  Opencart(browser) {
    const page = browser.page.nopobject9();

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
   .typeLastName("Wojciechowski")
   .pickDay()
   .pickMonth()
   .pickYear()
   .typeEmail("example@test123.com")
   .typePassword("WOJTAS12345!")
   .typeConfirmPassword("WOJTAS12345!")
   .clickRegisterBtn()
    

   browser
   .assert.urlContains("https://demo.nopcommerce.com/registerresult/1?returnUrl=/")
   .assert.visible(".result")
   .assert.textContains(".result", "Your registration completed")
   .assert.visible(".register-continue-button")

   page
   .clickContinue()

   browser
   .assert.urlContains("https://demo.nopcommerce.com")
  },
};
