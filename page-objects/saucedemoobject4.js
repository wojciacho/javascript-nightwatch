module.exports = {
  url: "https://www.saucedemo.com",
  elements: {
   usernameEl: '#user-name',
   passwordEl: '#password',
   loginEl: '#login-button',
   sorterEl: '.right_component > .select_container > .product_sort_container',
   sorterOptionEl: 'option[value="hilo"]'
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
    clickSorter() {
      return this
      .click("@sorterEl")
      .click("@sorterOptionEl")
    }
  },
}
      
  
