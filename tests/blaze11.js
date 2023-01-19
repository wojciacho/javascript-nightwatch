module.exports = {
  "@tags": ["blaze11"],
  Blaze(browser) {
    const page = browser.page.blazeobject11();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/")

    page
    .clickContact()

    browser
    .assert.visible("#exampleModal > div > div")
    .assert.visible("#exampleModalLabel")
    .assert.textContains("#exampleModalLabel", "New message")

    .assert.visible("#exampleModal > div > div > div.modal-body > form > div:nth-child(1) > label")
    .assert.textContains("#exampleModal > div > div > div.modal-body > form > div:nth-child(1) > label", "Contact Email:")

    .assert.visible("#exampleModal > div > div > div.modal-body > form > div:nth-child(2) > label")
    .assert.textContains("#exampleModal > div > div > div.modal-body > form > div:nth-child(2) > label", "Contact Name:")

    .assert.visible("#exampleModal > div > div > div.modal-body > form > div:nth-child(3) > label")
    .assert.textContains("#exampleModal > div > div > div.modal-body > form > div:nth-child(3) > label", "Message:")

    page
    .typeEmail("example@example123.com")
    .typeName("Wojciacho")
    .typeMessage("I'm testing this page")
    .clickSend()

    browser
    .acceptAlert()
  },
};
