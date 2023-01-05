module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    monitorsEl: {
    selector: '//a[text()="Monitors"]',
    locateStrategy: 'xpath'
   },
   appleEl: '#tbodyid > div:nth-child(1) > div > div > h4 > a',
   asusEl: '#tbodyid > div:nth-child(2) > div > div > h4 > a',
   homeEl: '#nava'
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
    clickHome() {
      return this
      .click("@homeEl")
    }
  },
};
