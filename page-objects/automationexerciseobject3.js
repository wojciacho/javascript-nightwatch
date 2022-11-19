module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      contactUsEl: {
        selector: '//a[@href="/contact_us"]',
        locateStrategy: "xpath"
      },
      nameEl: '.col-md-6 > input[type="text"]',
      emailEl: 'input[type="email"]',
      subjectEl: '.col-md-12 > input[type="text"]',
      messageEl: "#message",
      submitButtonEl: 'input[type="submit"]',
      successButtonEl: '.btn-success'
    },
    commands: {
      clickContactUs() {
        return this
        .click("@contactUsEl");
      },
      typeName(value) {
        return this
        .clearValue("@nameEl")
        .setValue("@nameEl", value)
      },
      typeEmail(value) {
        return this
        .clearValue("@emailEl")
        .setValue("@emailEl", value)
      },
      typeSubject(value) {
        return this
        .clearValue("@subjectEl")
        .setValue("@subjectEl", value)
      },
      typeMessage(value) {
        return this
        .clearValue("@messageEl")
        .setValue("@messageEl", value)
      },
      clickSubmit() {
        return this
        .click("@submitButtonEl")
      },
      clickHome() {
        return this
        .click("@successButtonEl")
      }
    },
  };
  