module.exports = {
  "@tags": ["magento33"],
  checkShoppingOptions(browser) {
  const page = browser.page.magentoobject33();
  
  page
  .navigate()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com")

  page
  .clickMen()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men.html")
  
  page
  .clickTops()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html")
  .assert.visible(".filter-content") 

  page
  .clickMaterial()

  browser
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Cocona® performance fabric")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Cotton")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Fleece")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Hemp")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "LumaTech")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Lycra")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Wool")
  .execute('scrollTo(0, 1000)')

  page
  .clickPattern()

  browser
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Color-Blocked")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Solid")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Striped")

  page
  .clickClimate()

  browser
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "All-Weather")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Cold")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Cool")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Indoor")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Mild")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Rainy")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Spring")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Warm")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Windy")
  .assert.textContains("div.filter-options-item.allow.active > div.filter-options-content > ol", "Wintry")
}
}



