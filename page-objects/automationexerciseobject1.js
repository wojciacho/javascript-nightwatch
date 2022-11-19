module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      signInEl: {
        selector: '//a[@href="/login"]',
        locateStrategy: "xpath"
      },
      emailEl: 'input[type="email"]',
      passwordEl: 'input[type="password"]',
      loginButtonEl: 'form[action="/login"] > .btn-default',
      logOutEl: {
        selector: '//a[@href="/logout"]',
        locateStrategy: "xpath"
      },
    },
    commands: {
      clickSignIn() {
        return this
        .click("@signInEl");
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
      clickLogin() {
        return this
        .click("@loginButtonEl")
      },
      clickLogOut() {
        return this
        .click("@logOutEl")
      }
    },
  };
  