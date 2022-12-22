module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    menEl: '#ui-id-5',
    topsEl: {
      selector: '//a[text()="Tops"]',
      locateStrategy: 'xpath',
    },
    limiterEl: {
      selector: '/html/body/div[2]/main/div[3]/div[1]/div[4]/div[3]/div/select',
      locateStrategy: 'xpath',
    },
    limiterOptionEl: {
      selector: '/html/body/div[2]/main/div[3]/div[1]/div[4]/div[3]/div/select/option[3]',
      locateStrategy: 'xpath'
    }
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
  clickLimiter() {
    return this
    .click("@limiterEl")
    .click("@limiterOptionEl")
  },
}
}
