module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      womenEl: {
        selector: '//a[@href="#Women"]',
        locateStrategy: "xpath"
      },
      dressEl: {
        selector: '//a[@href="/category_products/1"]',
        locateStrategy: "xpath"
      },
      menEl: {
        selector: '//a[@href="#Men"]',
        locateStrategy: "xpath"
      },
      jeansEl: {
        selector: '//a[@href="/category_products/6"]',
        locateStrategy: "xpath"
      },
    },
    commands: {
      clickWomen() {
        return this
        .click("@womenEl");
      },
      clickDress() {
        return this
        .click("@dressEl")
      },
      clickMen() {
        return this
        .click("@menEl")
      },
      clickJeans() {
        return this
        .click("@jeansEl")
      },
    },
  };
  