module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: {
   loginEl: {
      selector: '//a[@href="/login?returnUrl=%2F"]',
      locateStrategy: 'xpath',
    },
    emailEl: '#Email',
    passwordEl: '#Password',
    loginBtn: '.login-button',
    logoutEl: {
      selector: '//a[@href="/logout"]',
      locateStrategy: 'xpath'
    },
  },
  commands: {
    clickLogin() {
      return this
      .click("@loginEl")
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
    clickLoginBtn() {
      return this
      .click("@loginBtn")
    },
    clickLogout() {
      return this
      .click("@logoutEl")
    }
  },
};
