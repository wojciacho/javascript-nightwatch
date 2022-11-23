module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      productsEl: {
        selector: '//a[@href="/products"]',
        locateStrategy: "xpath"
      },
      viewProductEl: {
        selector: '//a[@href="/product_details/1"]',
        locateStrategy: "xpath",
      },
      nameEl: "#name",
      emailEl: "#email",
      reviewEl: "#review",
      btnReview: "#button-review"
      
    },
    commands: {
      clickProducts() {
        return this
        .click("@productsEl");
      },
      clickViewProduct() {
        return this
        .click("@viewProductEl")
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
      typeReview(value) {
        return this
        .clearValue("@reviewEl")
        .setValue("@reviewEl", value)
      },
      clickSubmit() {
        return this
        .click("@btnReview")
      }
    },
  };
  