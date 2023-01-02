module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    menEl: '#ui-id-5',
    topsEl: {
      selector: '//a[text()="Tops"]',
      locateStrategy: 'xpath',
    },
    priceEl: {
      selector: '//*[@id="narrow-by-list"]/div[4]/div[1]',
      locateStrategy: 'xpath',
    },
    priceOptionEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/men/tops-men.html?price=30-40"]',
      locateStrategy: 'xpath',
    },
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
  clickPrice() {
    return this
    .click("@priceEl")
  },
  clickPriceEl() {
    return this
    .click("@priceOptionEl")
  }
}
}
