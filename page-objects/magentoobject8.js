module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      createAccountEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/create/"]',
        locateStrategy: 'xpath',
      },
      firstNameEl: '#firstname',
      lastNameEl: '#lastname',
      emailEl: '#email_address',
      passwordEl: '#password',
      confirmPasswordEl: '#password-confirmation',
      createButton: '.submit',
      switchEl: '.page-header > .panel > .header > .header > .customer-welcome > .customer-name > button',
      signOutEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/customer/account/logout/"]',
        locateStrategy: 'xpath',
      }
    },
    commands: {
    clickCreateAccount() {
      return this
      .click("@createAccountEl")
    },
    typeFirstName(value) {
      return this
      .clearValue("@firstNameEl")
      .setValue("@firstNameEl", value)
    },
    typeLastName(value) {
      return this
      .clearValue("@lastNameEl")
      .setValue("@lastNameEl", value)
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
      .setValue("@confirmPasswordEl", value)
    },
    clickCreate() {
      return this
      .click("@createButton")
    },
    clickSwitch() {
      return this
      .click("@switchEl")
    },
    clickSignOut() {
      return this
      .click("@signOutEl")
    }
  }
}
  