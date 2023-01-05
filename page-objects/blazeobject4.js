module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    loginEl: '#login2',
    usernameEl: '#loginusername',
    passwordEl: '#loginpassword',
    loginButton: '#logInModal > div > div > div.modal-footer > button.btn.btn-primary',
    logoutEl: '#logout2'
  },
  commands: {
    clickLogin() {
      return this
      .click("@loginEl")
    },
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
    clickLoginButton() {
      return this
      .click("@loginButton")
    },
    clickLogout() {
      return this
      .click("@logoutEl")
    }
  },
};
