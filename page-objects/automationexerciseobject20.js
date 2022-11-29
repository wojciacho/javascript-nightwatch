module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      loginEl: {
        selector: '//a[@href="/login"]',
        locateStrategy: "xpath",
      },
      loginEmailEl: 'form[action="/login"] > input[type="email"]',
      loginPasswordEl: 'form[action="/login"] > input[type="password"]',
      loginBtnEl: 'form[action="/login"] > button[type="submit"]',
    },
    commands: {
      clickLogin() {
        return this
        .click("@loginEl");
      },
      typeEmail(value) {
        return this
        .clearValue("@loginEmailEl")
        .setValue("@loginEmailEl", value)
      },
      typePassword(value) {
        return this
        .clearValue("@loginPasswordEl")
        .setValue("@loginPasswordEl", value)
      },
      clickLoginToAccount() {
        return this
        .click("@loginBtnEl")
      }
    },
  };
  