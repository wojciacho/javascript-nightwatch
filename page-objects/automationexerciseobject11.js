module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      productsEl: {
        selector: '//a[@href="/products"]',
        locateStrategy: "xpath"
      },
      poloEl: {
        selector: '//a[@href="/brand_products/Polo"]',
        locateStrategy: "xpath"
      },
      babyhugEl: {
        selector: '//a[@href="/brand_products/Babyhug"]',
        locateStrategy: "xpath"
      },
    },
    commands: {
      clickProducts() {
        return this
        .click("@productsEl");
      },
      clickPolo() {
        return this
        .click("@poloEl")
      },
      clickBabyhug() {
        return this
        .click("@babyhugEl")
      },
    },
  };
  