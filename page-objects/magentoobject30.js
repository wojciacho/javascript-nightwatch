module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    menEl: '#ui-id-5',
    topsEl: {
      selector: '//a[text()="Tops"]',
      locateStrategy: 'xpath',
    },
    categoryEl: 'div:nth-child(1) > div.filter-options-title',
    jacketsEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/men/tops-men.html?cat=14"]',
      locateStrategy: 'xpath',
    },
    clearEl: '.filter-clear',
  },
  commands: {
  clickMen() {
    return this
    .click("@menEl")
  },
  clickTops() {
    return this
    .click("@topsEl")
  },
  clickCategory() {
    return this
    .click("@categoryEl")
  },
  clickJackets() {
    return this
    .click("@jacketsEl")
  },
  clickClear() {
    return this
    .click("@clearEl")
  }
}
}
