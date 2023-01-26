module.exports = {
  url: "https://demo.openmrs.org/openmrs/login.htm",
  elements: { 
    usernameEl: '#username',
    passwordEl: '#password',
    loginButton: '#loginButton',
    locationEl: '#sessionLocation >li[value="6"]',
    findPatientEl: {
      selector: '/html/body/div/div[3]/div[3]/div/a[1]',
      locateStrategy: 'xpath',
    },
  },
  commands: {
    typeUsername(value) {
      return this
      .clearValue("@usernameEl")
      .setValue("@usernameEl", value)
    },
    typePassword(value) {
      return this
      .clearValue("@passwordEl")
      .setValue("@passwordEl", value)
    },
    clickLocation() {
      return this
      .click("@locationEl")
    },
    clickLogin() {
      return this
      .click("@loginButton")
    },
    clickFindPatient() {
      return this
      .click("@findPatientEl")
    },
  },
};
