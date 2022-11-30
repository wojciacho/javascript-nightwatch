module.exports = {
    url: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    elements: {
      managerLoginEl: 'button[ng-click="manager()"]',
      addCustomerEl: 'button[ng-click="addCust()"]',
      fNameEl: 'input[ng-model="fName"]',
      lNameEl: 'input[ng-model="lName"]',
      postEl: 'input[ng-model="postCd"]',
      submitBtn: 'button[type="submit"]',
      customersEl: 'button[ng-click="showCust()"]',
      accountEl: 'button[ng-click="openAccount()"]',
      userEl: '#userSelect',
      optionUserEl: 'option[value="7"]',
      currencyEl: '#currency',
      currencyOptionEl: 'option[value="Dollar"]',
      inputEl: 'input[type="text"]',
      homeEl: 'button[ng-click="home()"]',
      customerLoginEl: 'button[ng-click="customer()"]',
      withdrawlEl: 'button[ng-class="btnClass3"]',
      transactionsEl: 'button[ng-class="btnClass1"]',
      amountPlaceholderEl: 'input[placeholder="amount"]',
      buttonResetEl: 'button[ng-click="reset()"]',
      logoutButtonEl: '.logout',
      depositEl: 'button[ng-class="btnClass2"]',
      userSelectEl: '#userSelect',
      optionUserEl: 'option[value="6"]',
      amountEl: 'input[placeholder="amount"]',
    },
    commands: {
      clickManager() {
        return this
        .click("@managerLoginEl")
      },
      addCustomer() {
        return this
        .click("@addCustomerEl")
      },
      setFName(value) {
        return this
        .setValue("@fNameEl", value)
      },
      setLName(value) {
        return this
        .setValue("@lNameEl", value)
      },
      setPost(value) {
        return this
        .setValue("@postEl", value)
      },
      clickSubmit() {
        return this
        .click("@submitBtn")
      },
      clickCustomers() {
        return this
        .click("@customersEl")
      },
      clickAccount() {
        return this
        .click("@accountEl")
      },
      clickUser() {
        return this
        .click("@userEl")
        .click("@optionUserEl")
      },
      clickCurrency() {
        return this
        .click("@currencyEl")
        .click("@currencyOptionEl")
      },
      search(value) {
        return this
        .setValue("@inputEl", value)
      },
      clickHome() {
        return this
        .click("@homeEl")
      },
      customerLogin() {
        return this
        .click("@customerLoginEl")
      },
      selectUser() {
        return this
        .click("@userSelectEl")
        .click("@optionUserEl")
      },
      clickDeposit() {
        return this
        .click("@depositEl")
      },
      clickWithdrawl() {
        return this
        .click("@withdrawlEl")
      },
      typeAmount(value) {
        return this
        .setValue("@amountPlaceholderEl", value)
      },
      clickTransactions() {
        return this
        .click("@transactionsEl")
      },
      clickReset() {
        return this
        .click("@buttonResetEl")
      },
      clickLogout() {
        return this
        .click("@logoutButtonEl")
      },
      setAmount(value) {
        return this
        .setValue("@amountEl", value)
      },
    },
  };
  