module.exports = {
  "@tags": ["blaze9"],
  Blaze(browser) {
    const page = browser.page.blazeobject9();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/");

    page
    .clickLogin()

    browser
    .assert.visible("#logInModal")
    .assert.visible("#logInModalLabel")
    .assert.textContains("#logInModalLabel", "Log in")

    .assert.visible("#logInModal > div > div > div.modal-body > form > div:nth-child(1) > label")
    .assert.textContains("#logInModal > div > div > div.modal-body > form > div:nth-child(1) > label", "Username:")

    .assert.visible("#logInModal > div > div > div.modal-body > form > div:nth-child(2) > label")
    .assert.textContains("#logInModal > div > div > div.modal-body > form > div:nth-child(2) > label", "Password:")

    page
    .typeUsername("Wojtas")
    .typePassword("WOJTAS!")
    .clickLoginButton()

    browser
    .pause(1000)
    .acceptAlert()
    .assert.visible("#logInModal")
  },
};
