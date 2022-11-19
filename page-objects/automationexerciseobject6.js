module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      cartEl: {
        selector: '//a[@href="/view_cart"]',
        locateStrategy: "xpath"
      },
      emailEl: 'input[type="email"]',
      subButtonEl: "#subscribe",
    },
    commands: {
      clickCart() {
        return this
        .click("@cartEl");
      },
      typeEmail(value) {
        return this
        .clearValue("@emailEl")
        .setValue("@emailEl", value)
      },
      clickSubscribe() {
        return this
        .click("@subButtonEl")
      }
    },
  };
  