module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    cartEl: {
      selector: '//a[@href="https://demo.opencart.com/index.php?route=checkout/cart&language=en-gb"]',
      locateStrategy: 'xpath',
    },
    continueBtn: '.btn-primary'
  },
  commands: {
    clickCart() {
      return this
      .click("@cartEl")
    },
    clickContinue() {
      return this
      .click("@continueBtn")
    }
  },
};
