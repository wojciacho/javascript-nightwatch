module.exports = {
    "@tags": ["globalsqa1"],
    customerTest(browser) {
      const page = browser.page.globalsqaobject1();
    
      page
      .navigate()

      browser
      .assert.urlContains("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")

      page
      .clickCustomer()
      .selectUser()

      browser
      .assert.textMatches("#userSelect", "Harry Potter")

      page
      .clickSubmit()
      .selectAccountNumber()

      browser
      .assert.textMatches("body > div > div > div.ng-scope > div > div:nth-child(3)", "Pound")
      
      page
      .clickDeposit()
      .setAmount("500")
      .clickSubmit()

      browser
      .assert.textMatches(".error", "Deposit Successful")
      .assert.textMatches("body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)", "500")

      page
      .clickWithdrawl()
      .pause(1000)
      .typeAmount("250")
      .clickSubmit()

      browser
      .assert.textMatches(".error", "Transaction successful")

      page
      .clickTransactions()

      browser
      .assert.textMatches("#anchor0", "500")
      .assert.textMatches("#anchor1", "250")

      page
      .clickReset()

      browser
      .assert.urlContains("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/listTx")

      page
      .clickLogout()
      .clickHome()

      browser
      .assert.urlContains("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
    },
  };
  