module.exports = {
  url: "https://www.saucedemo.com",
  elements: {
   usernameEl: '#user-name',
   passwordEl: '#password',
   loginEl: '#login-button',
   tshirtEl: '#item_1_title_link',
   backEl: '#back-to-products'
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
    clickTshirt() {
      return this
      .click("@tshirtEl")
    },
    clickBack() {
      return this
      .click("@backEl")
    }
  },
}
      
  
