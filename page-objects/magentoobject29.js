module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    menEl: '#ui-id-5',
    topsEl: {
      selector: '//a[text()="Tops"]',
      locateStrategy: 'xpath',
    },
    sorterEl: '#sorter',
    sorterOptionEl: 'option[value="price"]',
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
  clickSorter() {
    return this
    .click("@sorterEl")
    .click("@sorterOptionEl")
  }
}
}
