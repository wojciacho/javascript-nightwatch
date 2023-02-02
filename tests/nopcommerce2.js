module.exports = {
  "@tags": ["nopcommerce2"],
  Opencart(browser) {
    const page = browser.page.nopobject2();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
  
    page
    .clickComputer()

    browser
    .assert.urlContains("https://demo.nopcommerce.com/computers")
    .assert.visible("#small-searchterms")
    .assert.visible("div.block.block-category-navigation > div.listbox")
    .assert.visible("div.breadcrumb > ul > li:nth-child(2) > strong")
    .assert.textContains("div.breadcrumb > ul > li:nth-child(2) > strong", "Computers")
    .assert.visible(" div.category-grid.sub-category-grid > div > div:nth-child(1) > div > h2 > a")
    .assert.visible(" div.category-grid.sub-category-grid > div > div:nth-child(2) > div > h2 > a")
    .assert.visible(" div.category-grid.sub-category-grid > div > div:nth-child(3) > div > h2 > a")
  },
};
