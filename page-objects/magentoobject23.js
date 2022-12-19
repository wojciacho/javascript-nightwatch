module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    signInEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]',
      locateStrategy: 'xpath',
    },
    emailEl: '#email',
    passwordEl: '#pass',
    submitEl: '#send2',
    switchEl: 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button',
    myAccountEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/"]',
      locateStrategy: 'xpath',
    },
    editEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/edit/"]',
      locateStrategy: 'xpath',
    },
    lastNameEl: '#lastname',
    saveEl: '.save',
  },
  commands: {
  clickSignIn() {
  return this
  .click("@signInEl")
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
  clickSubmit() {
    return this
    .click("@submitEl")
  },
  clickSwitch() {
    return this
    .click("@switchEl")
  },
  clickMyAccount() {
    return this
    .click("@myAccountEl")
  },
  clickEdit() {
    return this
    .click("@editEl")
  },
  typeLastName(value) {
    return this
    .clearValue("@lastNameEl")
    .setValue("@lastNameEl", value)
  },
  clickSave() {
    return this
    .click("@saveEl")
  }
}
}
