module.exports = {
    "@tags": ["parabank1"],
    parabankTest(browser) {
      const page = browser.page.parabankobject1();
    
      page
      .navigate()

      browser
      .assert.urlContains("https://parabank.parasoft.com/parabank/index.htm")

      page
      .typeUserName("wojciacho")
      .typePassword("wojciacho")
      .clickLogin()
      
      browser
      .assert.visible("#accountTable")

      page
      .clickPayBill()


      browser
      .assert.urlContains("https://parabank.parasoft.com/parabank/billpay.htm")
      
      page
      .typePayeeName("Wojciech")
      .typePayeeAddress("Main street")
      .typePayeeCity("Chicago")
      .typePayeeState("IL")
      .typePayeeCode("12345")
      .typePayeePhone("123456789")
      .typePayeeAccount("1111 2222 3333 4444")
      .typePayeeVerify("1111 2222 3333 4444")
      .typePayeeAmount("500")
      .pause(1000)
      .clickSend()
      .clickContact()


      browser
      .assert.urlContains("https://parabank.parasoft.com/parabank/updateprofile.htm")

      page
      .pause(2000)
      .updateName("Wojciacho")
      .pause(1000)
      .clickUpdate()

      // browser
      // .assert.textMatches(".ng-scope >.title", "Profile Updated")

      page
      .clickLogout()

      browser
      .assert.titleMatches("ParaBank | Welcome | Online Banking")
      .assert.visible("input[name='username']")
      .assert.visible("input[name='password']")
    },
  };
  