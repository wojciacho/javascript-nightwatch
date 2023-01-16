module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    monitorsEl: {
      selector: '//a[text()="Monitors"]',
      locateStrategy: 'xpath',
    },
    appleEl: '#tbodyid > div:nth-child(1) > div > div > h4 > a',
    asusEl: '#tbodyid > div:nth-child(2) > div > div > h4 > a',
    addToCartEl: '.btn-success',
    cartEl: '#cartur',
    homeEl: {
      selector: '//a[@href="index.html"]',
      locateStrategy: 'xpath',
    },
    deleteFirstItemEl: '#tbodyid > tr:nth-child(1) > td:nth-child(4) > a',
    deleteSecondItemEl: '#tbodyid > tr > td:nth-child(4) > a'
  },
  commands: {
   clickMonitors() {
    return this
    .click("@monitorsEl")
   },
   clickAppleMonitor() {
    return this
    .click("@appleEl")
   },
   clickAsusMonitor() {
    return this
    .click("@asusEl")
   },
   clickAddToCart() {
    return this
    .click("@addToCartEl")
   },
   clickCart() {
    return this
    .click("@cartEl")
   },
   clickHome() {
    return this
    .click("@homeEl")
   },
   clickDeleteFirstItem() {
    return this
    .click("@deleteFirstItemEl")
   },
   clickDeleteSecondItem() {
    return this
    .click("@deleteSecondItemEl")
   }
  },
};
