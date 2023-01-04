module.exports = {
  url: "https://www.saucedemo.com",
  elements: {
   usernameEl: '#user-name',
   passwordEl: '#password',
   loginEl: '#login-button',
   backpackEl: '#item_4_title_link',
   cartEl: '#add-to-cart-sauce-labs-backpack',
   removeEl: '#remove-sauce-labs-backpack',
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
    clickBackpack() {
      return this
      .click("@backpackEl")
    },
    clickAddToCart() {
      return this
      .click("@cartEl")
    },
    clickRemove() {
      return this
      .click("@removeEl")
    },
    clickBack() {
      return this
      .click("@backEl")
    }
  },
}
      
  
