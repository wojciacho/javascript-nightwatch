module.exports = {
  "@tags": ["nopcommerce13"],
  Opencart(browser) {
    const page = browser.page.nopobject13();

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
   .typeEmail("example1@test123.com")
   .clickNewsletter()
   .typePassword("WOJTAS12345!")
   .clickRegisterBtn()
    

   browser
   .assert.visible("#ConfirmPassword-error")
   .assert.textContains("#ConfirmPassword-error", "Password is required.")
   
  },
};
