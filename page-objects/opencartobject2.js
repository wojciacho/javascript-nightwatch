module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    myAccountEl: '.float-end > .list-inline > .list-inline-item > .dropdown',
    registerEl: {
      selector: '//a[@href="https://demo.opencart.com/index.php?route=account/register&language=en-gb"]',
      locateStrategy: 'xpath',
    },
    firstNameEl: '#input-firstname',
    lastNameEl: '#input-lastname',
    passwordEl: '#input-password',
    checkboxEl: 'input[type="checkbox"]',
    continueButton: '.btn-primary',
  },
  commands: {
    clickMyAccount() {
      return this
      .click("@myAccountEl")
    },
    clickRegister() {
      return this
      .click("@registerEl")
    },
    typeFirstName(value) {
      return this
      .clearValue("@firstNameEl")
      .setValue("@firstNameEl", value)
    },
    typeLastName(value) {
      return this
      .clearValue("@lastNameEl")
      .setValue("@lastNameEl", value)
    },
    typePassword(value) {
      return this
      .clearValue("@passwordEl")
      .setValue("@passwordEl", value)
    },
    clickTPP() {
      return this
      .click("@checkboxEl")
    },
    clickContinue() {
      return this
      .click("@continueButton")
    }
  },
};
