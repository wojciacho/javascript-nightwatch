module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      productsEl: {
        selector: '//a[@href="/products"]',
        locateStrategy: "xpath"
      },
      textEl: 'input[type="text"]',
      searchButtonEl: ".btn-lg"
    },
    commands: {
      clickProducts() {
        return this
        .click("@productsEl");
      },
      typeName(value) {
        return this
        .clearValue("@textEl")
        .setValue("@textEl", value)
      },
      clickSearch() {
        return this
        .click("@searchButtonEl")
      }
    },
  };
  