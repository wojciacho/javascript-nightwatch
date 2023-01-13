module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    macbookEl: {
      selector: '//a[@href="https://demo.opencart.com/index.php?route=product/product&language=en-gb&product_id=43"]',
      locateStrategy: 'xpath',
    }
  },
  commands: {
    clickMacbook() {
      return this
      .click("@macbookEl")
    },
  },
};
