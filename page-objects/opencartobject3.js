module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    camerasEl: {
      selector: '//a[@href="https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=33"]',
      locateStrategy: 'xpath'
    },
    canonEl: {
      selector: '//a[text()="Canon EOS 5D"]',
      locateStrategy: 'xpath',
    },
    nikonEl: {
      selector: '//a[text()="Nikon D300"]',
      locateStrategy: 'xpath',
    },
  },
  commands: {
    clickCameras() {
      return this
      .click("@camerasEl")
    },
    clickCanon() {
      return this
      .click("@canonEl")
    },
    clickNikon() {
      return this
      .click("@nikonEl")
    },
  },
};
