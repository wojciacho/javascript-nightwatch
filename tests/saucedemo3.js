module.exports = {
  "@tags": ["saucedemo3"],
  Saucedemo(browser) {
    const page = browser.page.saucedemoobject3();
    const userName = "standard_user";
    const password = "secret_sauce";

    page
    .navigate()
      
    browser
    .assert.urlContains("https://www.saucedemo.com")
    .assert.visible("#user-name")
    .assert.visible("#password")
    .assert.visible("#login-button")

    page
    .typeUserName(userName)
    .typePassword(password)
    .clickLogin()

    browser
    .assert.urlContains("https://www.saucedemo.com/inventory.html")
    .assert.visible(".title")
    .assert.titleEquals("Swag Labs")
    .execute('scrollTo(0, 1800)')
    .assert.textContains(".footer_copy", "Sauce Labs.")
  },
};
