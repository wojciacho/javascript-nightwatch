module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    advancedEl: '.item > a[data-action="advanced-search"]',
    nameEl: '#name',
    priceEl: '#price',
    priceToEl: '#price_to',
    searchEl: '.primary > .search',
    osloHoodieEl: ' li:nth-child(1) > div > div > strong > a',
    yogaHoodieEl: ' li:nth-child(2) > div > div > strong > a',
    compareEl: '.product-addto-links > .tocompare'
  },
  commands: {
  clickAdvancedSearch() {
    return this
    .click("@advancedEl")
  },
  typeName(value) {
    return this
    .clearValue("@nameEl")
    .setValue("@nameEl", value)
  },
  typePrice(value) {
    return this
    .clearValue("@priceEl")
    .setValue("@priceEl", value)
  },
  typePriceTo(value) {
    return this
    .clearValue("@priceToEl")
    .setValue("@priceToEl", value)
  },
  clickSearch() {
    return this
    .click("@searchEl")
  },
  clickOsloHoodie() {
    return this
    .click("@osloHoodieEl")
  },
  clickToCompare() {
    return this
    .click("@compareEl")
  },
  clickYogaHoodie() {
    return this
    .click("@yogaHoodieEl")
  }
}
}
