module.exports = {
  "@tags": ["opencart2"],
  Opencart(browser) {
    const page = browser.page.opencartobject2();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")

    page
    .clickMyAccount()
    .clickRegister()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=account/register&language=en-gb")

    page
    .typeFirstName("Wojciech")
    .typeLastName("Wojciechowski")
    .typePassword("WOJTAS12345!")
    .typePassword("example@example.com")
    .clickTPP()
    
    browser
    .assert.textContains("#content > h1", "Register Account")
    .assert.textContains("#content > p", "If you already have an account with us, please login at the login page.")

    page
    .clickContinue()
  },
};
