module.exports = {
    url: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    elements: {
      customerLoginEl: 'button[ng-click="customer()"]',
      userSelectEl: '#userSelect',
      optionUserEl: 'option[value="2"]',
      submitBtnEl: 'button[type="submit"]',
      accountSelectEl: '#accountSelect',
      accountOptionEl: 'option[value="number:1005"]',
      depositEl: 'button[ng-class="btnClass2"]',
      withdrawlEl: 'button[ng-class="btnClass3"]',
      transactionsEl: 'button[ng-class="btnClass1"]',
      inputEl: 'input[type="number"]',
      amountPlaceholderEl: 'input[placeholder="amount"]',
      buttonResetEl: 'button[ng-click="reset()"]',
      logoutButtonEl: '.logout',
      homeButtonEl: '.home'
    },
    commands: {
      clickCustomer() {
        return this
        .click("@customerLoginEl");
      },
      selectUser() {
        return this
        .click("@userSelectEl")
        .click("@optionUserEl")
      },
      clickSubmit() {
        return this
        .click("@submitBtnEl")
      },
      selectAccountNumber() {
        return this
        .click("@accountSelectEl")
        .click("@accountOptionEl")
      },
      clickDeposit() {
        return this
        .click("@depositEl")
      },
      setAmount(value) {
        return this
        .setValue("@inputEl", value)
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
      clickHome() {
        return this
        .click("@homeButtonEl")
      }
    },
  };
  