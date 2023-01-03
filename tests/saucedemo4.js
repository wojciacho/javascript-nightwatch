module.exports = {
  "@tags": ["saucedemo4"],
  Saucedemo(browser) {
    const page = browser.page.saucedemoobject4();
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

    page
    .clickSorter()

    browser
    .assert.visible("#item_5_title_link")
    .assert.textContains("#item_5_title_link", "Sauce Labs Fleece Jacket")
  },
};
