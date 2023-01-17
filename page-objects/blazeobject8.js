module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    laptopsEl: {
      selector: '//a[text()="Laptops"]',
      locateStrategy: 'xpath',
    },
    sony5El: '#tbodyid > div:nth-child(1) > div > div > h4 > a',
    sony7El: '#tbodyid > div:nth-child(2) > div > div > h4 > a',
    homeEl: {
      selector: '//a[@href="index.html"]',
      locateStrategy: 'xpath',
    },  
  },
  commands: {
   clickLaptops() {
    return this
    .click("@laptopsEl")
   },
   clickSony5() {
    return this
    .click("@sony5El")
   },
   clickSony7() {
    return this
    .click("@sony7El")
   },
   clickHome() {
    return this
    .click("@homeEl")
   },
  },
};
