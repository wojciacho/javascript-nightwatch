module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      signInEl: {
        selector: '//a[@href="/login"]',
        locateStrategy: "xpath"
      },
      textEl: 'input[type="text"]',
      emailEl: 'form[action="/signup"] > input[type="email"]',
      signUpButtonEl: 'form[action="/signup"] > .btn-default',
    },
    commands: {
      clickSignIn() {
        return this
        .click("@signInEl");
      },
      typeExistingName(value) {
        return this
        .clearValue("@textEl")
        .setValue("@textEl", value)
      },
      typeExistingEmail(value) {
        return this
        .clearValue("@emailEl")
        .setValue("@emailEl", value)
      },
      clickSignUp() {
        return this
        .click("@signUpButtonEl")
      },
    },
  };
  