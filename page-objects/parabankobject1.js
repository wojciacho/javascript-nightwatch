module.exports = {
    url: 'https://parabank.parasoft.com/parabank/index.htm',
    elements: {
      userNameEl: "input[name='username']",
      passwordEl: "input[name='password']",
      loginEl: "input[value='Log In']",
      billPayEl: {
        selector: '//a[@href="/parabank/billpay.htm"]',
        locateStrategy: "xpath",
      },
      payeeNameEl: "input[name='payee.name']",
      payeeAddressEl: "input[name='payee.address.street']",
      payeeCityEl: "input[name='payee.address.city']",
      payeeStateEl: "input[name='payee.address.state']",
      payeeCodeEl: "input[name='payee.address.zipCode']",
      payeePhoneEl: "input[name='payee.phoneNumber']",
      payeeAccountEl: "input[name='payee.accountNumber']",
      payeeVerifyEl: "input[name='verifyAccount']",
      payeeAmountEl: "input[name='amount']",
      sendPaymentEl: "input[value='Send Payment']",
      contactEl: {
        selector: '//a[@href="/parabank/updateprofile.htm"]',
        locateStrategy: "xpath",
      },
      customerNameEl: "input[name='customer.firstName']",
      updateProfileEl: "input[value='Update Profile']",
      logoutEl: {
        selector: '//a[@href="/parabank/logout.htm"]',
        locateStrategy: "xpath",
      },
    },
    commands: {
      typeUserName(value) {
        return this
        .clearValue("@userNameEl")
        .setValue("@userNameEl", value)
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
      clickPayBill() {
        return this
        .click("@billPayEl")
      },
      typePayeeName(value) {
        return this
        .clearValue("@payeeNameEl")
        .setValue("@payeeNameEl", value)
      },
      typePayeeAddress(value) {
        return this
        .clearValue("@payeeAddressEl")
        .setValue("@payeeAddressEl", value)
      },
      typePayeeCity(value) {
        return this
        .clearValue("@payeeCityEl")
        .setValue("@payeeCityEl", value)
      },
      typePayeeState(value) {
        return this
        .clearValue("@payeeStateEl")
        .setValue("@payeeStateEl", value)
      },
      typePayeeCode(value) {
        return this
        .clearValue("@payeeCodeEl")
        .setValue("@payeeCodeEl", value)
      },
      typePayeePhone(value) {
        return this
        .clearValue("@payeePhoneEl")
        .setValue("@payeePhoneEl", value)
      },
      typePayeeAccount(value) {
        return this
        .clearValue("@payeeAccountEl")
        .setValue("@payeeAccountEl", value)
      },
      typePayeeVerify(value) {
        return this
        .clearValue("@payeeVerifyEl")
        .setValue("@payeeVerifyEl", value)
      },
      typePayeeAmount(value) {
        return this
        .clearValue("@payeeAmountEl")
        .setValue("@payeeAmountEl", value)
      },
      clickSend() {
        return this
        .click("@sendPaymentEl")
      },
      clickContact() {
        return this
        .click("@contactEl")
      },
      updateName(value) {
        return this
        .clearValue("@customerNameEl")
        .setValue("@customerNameEl", value)
      },
      clickUpdate() {
        return this
        .click("@updateProfileEl")
      },
      clickLogout() {
        return this
        .click("@logoutEl")
      }
    },
  };
  