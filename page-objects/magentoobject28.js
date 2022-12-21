module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    aboutEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/about-us"]',
      locateStrategy: 'xpath',
  },
  },
  commands: {
  clickAboutUs() {
    return this
    .click("@aboutEl")
  }
}
}
