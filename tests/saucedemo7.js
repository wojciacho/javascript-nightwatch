module.exports = {
  "@tags": ["saucedemo7"],
  Saucedemo(browser) {
    const page = browser.page.saucedemoobject7();
    const userName = "locked_out_user";
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
    .assert.urlContains("https://www.saucedemo.com")
    .assert.visible(".bot_column")
    .assert.titleEquals("Swag Labs")
    .assert.visible("div:nth-child(1) > .error_icon")
    .assert.visible("div:nth-child(2) > .error_icon")

    .assert.visible(".error-message-container")
    .assert.textContains(".error-message-container", "Epic sadface: Sorry, this user has been locked out.")

    .assert.visible(".login_credentials")
    .assert.textContains(".login_credentials", "Accepted usernames are:")
    .assert.textContains(".login_credentials", "standard_user")
    .assert.textContains(".login_credentials", "locked_out_user")
    
    .assert.visible(".login_password")
    .assert.textContains(".login_password", "Password for all users:")
    .assert.textContains(".login_password", "secret_sauce")
  },
};
