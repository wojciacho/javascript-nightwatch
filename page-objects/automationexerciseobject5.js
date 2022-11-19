module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      subscriptionEl: 'input[type="email"]',
      subButtonEl: "#subscribe"
    },
    commands: {
      typeEmail(value) {
        return this
        .clearValue("@subscriptionEl")
        .setValue("@subscriptionEl", value)
      },
      clickSubscribe() {
        return this
        .click("@subButtonEl")
      }
    },
  };
  