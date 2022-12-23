module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    menEl: '#ui-id-5',
    topsEl: {
      selector: '//a[text()="Tops"]',
      locateStrategy: 'xpath',
    },
    materialEl: 'div:nth-child(6) > div.filter-options-title',
    patternEl: {
      selector: '//*[@id="narrow-by-list"]/div[12]/div[1]',
      locateStrategy: 'xpath',
    },
    climateEl: 'div:nth-child(13) > div.filter-options-title'
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
  clickMaterial() {
    return this
    .click("@materialEl")
  },
  clickPattern() {
    return this
    .click("@patternEl")
  },
  clickClimate() {
    return this
    .click("@climateEl")
  }
}
}
