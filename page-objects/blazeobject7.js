module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    phonesEl: {
      selector: '//a[text()="Phones"]',
      locateStrategy: 'xpath',
    },
    samsungEl: '#tbodyid > div:nth-child(1) > div > div > h4 > a',
    nokiaEl: '#tbodyid > div:nth-child(2) > div > div > h4 > a',
    homeEl: {
      selector: '//a[@href="index.html"]',
      locateStrategy: 'xpath',
    },  
  },
  commands: {
   clickPhones() {
    return this
    .click("@phonesEl")
   },
   clickSamsung() {
    return this
    .click("@samsungEl")
   },
   clickNokia() {
    return this
    .click("@nokiaEl")
   },
   clickHome() {
    return this
    .click("@homeEl")
   },
  },
};
