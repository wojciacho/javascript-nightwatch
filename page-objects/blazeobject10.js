module.exports = {
  url: "https://www.demoblaze.com/",
  elements: { 
    phonesEl: {
      selector: '//a[text()="Phones"]',
      locateStrategy: 'xpath',
    },
  },
  commands: {
    clickPhones() {
      return this
      .click("@phonesEl")
    }
  },
};
