module.exports = {
    "@tags": ["globalsqa2"],
    customerTest(browser) {
      const page = browser.page.globalsqaobject2();
    
      page
      .navigate()

      browser
      .assert.urlContains("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")

      page
      .clickManager()
      .addCustomer()
      .setFName("Chuck")
      .setLName("Norris")
      .setPost("12345")
      .clickSubmit()
      .clickCustomers()
      
      browser
      .assert.textMatches(".table", "Chuck Norris 12345")

      page
      .clickAccount()
      .clickUser()
      .clickCurrency()
      .clickSubmit()
      .clickCustomers()
      .search("Chuck")

      browser
      .assert.textMatches(".table", "Chuck Norris 12345")
      
      page
      .clickHome()

      browser
      .assert.urlContains("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
      
      page
      .customerLogin()
      .selectUser()

      browser
      .assert.textMatches("#userSelect", "Chuck Norris")

      page
      .clickSubmit()

      browser
      .assert.textMatches("body > div > div > div.ng-scope > div > div:nth-child(3)", "Dollar")
      
      page
      .clickDeposit()
      .setAmount("500")
      .pause(1000)
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
      .pause(1000)

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
  