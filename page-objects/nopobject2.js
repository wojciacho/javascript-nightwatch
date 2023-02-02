module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: { 
    computerEl: {
      selector: '/html/body/div[6]/div[2]/ul[1]/li[1]/a',
      locateStrategy: 'xpath',
    }
  },
  commands: {
    clickComputer() {
      return this
      .click("@computerEl")
    }
  },
};
