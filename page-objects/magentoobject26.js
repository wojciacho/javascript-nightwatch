module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    advancedEl: '.item > a[data-action="advanced-search"]',
    nameEl: '#name',
    priceEl: '#price',
    priceToEl: '#price_to',
    searchEl: '.primary > .search',
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
  }
}
}
