module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    signUpEl: '#signin2',
    usernameEl: '#sign-username',
    passwordEl: '#sign-password',
    signUpButton: '#signInModal > div > div > div.modal-footer > button.btn.btn-primary',
  },
  commands: {
    clickSignUp() {
      return this
      .click("@signUpEl")
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
    clickSign() {
      return this
      .click("@signUpButton")
    }
  },
};
