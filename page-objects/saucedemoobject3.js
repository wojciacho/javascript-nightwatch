module.exports = {
  url: "https://www.saucedemo.com",
  elements: {
   usernameEl: '#user-name',
   passwordEl: '#password',
   loginEl: '#login-button'
  },
  commands: {
    typeUserName(value) {
      return this
      .clearValue("@usernameEl")
      .setValue("@usernameEl", value)
    },
    typePassword(value) {
      return this
      .clearValue("@passwordEl")
      .setValue("@passwordEl", value)
    },
    clickLogin() {
      return this
      .click("@loginEl")
    },
  },
}
      
  
