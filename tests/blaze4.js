module.exports = {
  "@tags": ["blaze4"],
  Blaze(browser) {
    const page = browser.page.blazeobject4();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/");

    page
    .clickLogin()

    browser
    .assert.visible("#logInModal > div > div")

    page
    .typeUsername("Wojciacho")
    .typePassword("WOJTAS12345!")
    .clickLoginButton()

    browser
    .assert.visible("#nameofuser")
    .assert.textContains("#nameofuser", "Welcome Wojciacho")
    .assert.urlContains("https://www.demoblaze.com/")

    page
    .clickLogout()

    browser
    .assert.cssProperty("#nameofuser", "display", "none")
  },
};
