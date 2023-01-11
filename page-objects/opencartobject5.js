module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    aboutUsEl: {
      selector: '//a[@href="https://demo.opencart.com/index.php?route=information/information&language=en-gb&information_id=1"]',
      locateStrategy: 'xpath',
    },
  },
  commands: {
    clickAboutUs() {
      return this
      .click("@aboutUsEl")
    },
  },
};
