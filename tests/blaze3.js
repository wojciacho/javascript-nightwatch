module.exports = {
  "@tags": ["blaze3"],
  Blaze(browser) {
    const page = browser.page.blazeobject3();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/");

    page
    .clickSignUp()

    browser
    .assert.visible("#signInModal > div > div")

    page
    .typeUsername("Wojciacho")
    .typePassword("WOJTAS12345!")
    .clickSign()

    browser
    .assert.urlContains("https://www.demoblaze.com/")
   
  },
};
