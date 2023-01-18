module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    loginEl: '#login2',
    usernameEl: '#loginusername',
    passwordEl: '#loginpassword',
    loginButton: {
      selector: '//*[@id="logInModal"]/div/div/div[3]/button[2]',
      locateStrategy: 'xpath'
    }  
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
   }
  },
};
