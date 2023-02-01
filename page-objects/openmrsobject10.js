module.exports = {
  url: "https://demo.openmrs.org/openmrs/login.htm",
  elements: { 
    usernameEl: '#username',
    passwordEl: '#password',
    loginButton: '#loginButton',
    locationEl: '#sessionLocation >li[value="6"]',
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
  },
};
