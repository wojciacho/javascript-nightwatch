module.exports = {
  url: 'https://magento.softwaretestingboard.com',
  elements: {
    advancedEl: '.item > a[data-action="advanced-search"]',
    skuEl: '#sku',
    searchEl: '.primary > .search',
  },
  commands: {
  clickAdvancedSearch() {
    return this
    .click("@advancedEl")
  },
  typeSKU(value) {
    return this
    .clearValue("@skuEl")
    .setValue("@skuEl", value)
  },
  clickSearch() {
    return this
    .click("@searchEl")
  }
}
}
