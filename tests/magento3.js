module.exports = {
    "@tags": ["magento3"],
    searchElement(browser) {
    const page = browser.page.magentoobject3();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/")
    .assert.textEquals(".message > .content", "This is a demo store. No orders will be fulfilled.")
    .assert.visible(".control > #search")

    page
    .searchElement("Argus All-Weather Tank")
    .clickSearch()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/catalogsearch/result/?q=Argus+All-Weather+Tank")
    .assert.textEquals(".page-title", "Search results for: 'Argus All-Weather Tank'")
    .execute('scrollTo(0, 500')
    .assert.visible("#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.products-grid > ol > li:nth-child(2) > div")
    .assert.textEquals("#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.products-grid > ol > li:nth-child(2) > div > div > strong > a", "Argus All-Weather Tank")
    .assert.textEquals("#product-price-694", "$22.00")
    },
  };
  