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
      confirmPassword: '#password-confirmation',
      createBtn: '.submit',
    },
    commands: {
    createAccount() {
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
      .clearValue("@confirmPassword")
      .setValue("@passwordEl", value)
      .setValue("@confirmPassword", value)
    },
    clickCreate() {
      return this
      .click("@createBtn")
    }
  }
}
  