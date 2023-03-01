module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: {
    registerEl: {
      selector: '//a[@href="/register?returnUrl=%2F"]',
      locateStrategy: 'xpath',
    },
    genderEl: '#gender-male',
    firstNameEl: '#FirstName',
    lastNameEl: '#LastName',
    dayEl: 'select[name="DateOfBirthDay"]',
    dayOptionEl: 'option[value="6"]',
    monthEl: 'select[name="DateOfBirthMonth"]',
    monthOptionEl: 'option[value="6"]',
    yearEl: 'select[name="DateOfBirthYear"]',
    yearOptionEl: 'option[value="2000"]',
    emailEl: '#Email',
    passwordEl: '#Password',
    confirmPasswordEl: '#ConfirmPassword',
    registerBtn: '#register-button',
    continueBtn: '.register-continue-button',
    newsletterEl: '#Newsletter'
  },
  commands: {
    clickRegister() {
      return this
      .click("@registerEl")
    },
    clickGender() {
      return this
      .click("@genderEl")
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
    pickDay() {
      return this
      .click("@dayEl")
      .click("@dayOptionEl")
    },
    pickMonth() {
      return this
      .click("@monthEl")
      .click("@monthOptionEl")
    },
    pickYear() {
      return this
      .click("@yearEl")
      .click("@yearOptionEl")
    },
    typeEmail(value) {
      return this
      .clearValue("@emailEl")
      .setValue("@emailEl", value)
    },
    typePassword(value) {
      return this
      .clearValue("@passwordEl")
      .setValue("@passwordEl", value)
    },
    typeConfirmPassword(value) {
      return this
      .clearValue("@confirmPasswordEl")
      .setValue("@confirmPasswordEl", value)
    },
    clickRegisterBtn() {
      return this
      .click("@registerBtn")
    },
    clickContinue() {
      return this
      .click("@continueBtn")
    },
    clickNewsletter() {
      return this
      .click("@newsletterEl")
    }
  },
};
