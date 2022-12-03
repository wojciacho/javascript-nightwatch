module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      menEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/men.html"]',
        locateStrategy: 'xpath',
    },
        logoEl: '.logo',
    },
    commands: {
      clickMenCategory() {
        return this
        .click("@menEl")
      },
      clickLogo() {
        return this
        .click("@logoEl")
      },
    },
  };
  