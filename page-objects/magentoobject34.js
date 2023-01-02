module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    menEl: '#ui-id-5',
    topsEl: {
      selector: '//a[text()="Tops"]',
      locateStrategy: 'xpath',
    },
    sizeEl: {
      selector: '//*[@id="narrow-by-list"]/div[3]/div[1]',
      locateStrategy: 'xpath',
    },
    sizeMEl: '#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > div > div > a:nth-child(3) > div',
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
  clickSize() {
    return this
    .click("@sizeEl")
  },
  clickSizeM() {
    return this
    .click("@sizeMEl")
  }
}
}
