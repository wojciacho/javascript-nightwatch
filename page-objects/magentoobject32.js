module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    menEl: '#ui-id-5',
    topsEl: {
      selector: '//a[text()="Tops"]',
      locateStrategy: 'xpath',
    },
    heliosReviewsEl: {
      selector: '//a[@href="https://magento.softwaretestingboard.com/helios-endurance-tank.html#reviews"]',
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
  clickReviews() {
    return this
    .click("@heliosReviewsEl")
  },
}
}
