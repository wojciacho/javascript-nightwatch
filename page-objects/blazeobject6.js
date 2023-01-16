module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    loginEl: '#login2',
    usernameEl: '#loginusername',
    passwordEl: '#loginpassword',
    loginButton: '#logInModal > div > div > div.modal-footer > button.btn.btn-primary',
    monitorsEl: {
      selector: '//a[text()="Monitors"]',
      locateStrategy: 'xpath',
    },
    appleEl: '#tbodyid > div:nth-child(1) > div > div > h4 > a',
    asusEl: '#tbodyid > div:nth-child(2) > div > div > h4 > a',
    addToCartEl: '.btn-success',
    cartEl: '#cartur',
    homeEl: {
      selector: '//a[@href="index.html"]',
      locateStrategy: 'xpath',
    },
    deleteFirstItemEl: '#tbodyid > tr:nth-child(1) > td:nth-child(4) > a',
    deleteSecondItemEl: '#tbodyid > tr > td:nth-child(4) > a'
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
   clickMonitors() {
    return this
    .click("@monitorsEl")
   },
   clickAppleMonitor() {
    return this
    .click("@appleEl")
   },
   clickAsusMonitor() {
    return this
    .click("@asusEl")
   },
   clickAddToCart() {
    return this
    .click("@addToCartEl")
   },
   clickCart() {
    return this
    .click("@cartEl")
   },
   clickHome() {
    return this
    .click("@homeEl")
   },
   clickDeleteFirstItem() {
    return this
    .click("@deleteFirstItemEl")
   },
   clickDeleteSecondItem() {
    return this
    .click("@deleteSecondItemEl")
   }
  },
};
