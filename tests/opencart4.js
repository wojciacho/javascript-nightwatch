module.exports = {
  "@tags": ["opencart4"],
  Opencart(browser) {
    const page = browser.page.opencartobject4();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")

    page
    .clickCurrency()
    .clickEuro()
    
    browser
    .assert.textContains("#form-currency > div > a > strong", "€")
    .assert.visible(".d-grid")
    .assert.textContains("div:nth-child(1) > form > div > div.content > div.description > div > span.price-new", "566.91€")
    .assert.textContains("div:nth-child(2) > form > div > div.content > div.description > div > span.price-new", "116.02€")
    .assert.textContains("div:nth-child(3) > form > div > div.content > div.description > div > span.price-new", "103.59€")
    .assert.textContains("div:nth-child(4) > form > div > div.content > div.description > div > span.price-new", "92.29€")
    .moveToElement("#narbar-menu > ul > li:nth-child(1)", 10, 10)
    .waitForElementVisible("#narbar-menu > ul > li:nth-child(1) > div > a", 1000)

    page
    .clickDesktops()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20")
    .assert.visible("div:nth-child(1) > form > div")
    .assert.textContains("div:nth-child(1) > form > div > div.content > div.description > div > span.price-new", "103.59€")
    .assert.visible("div:nth-child(2) > form > div")
    .assert.textContains("div:nth-child(2) > form > div > div.content > div.description > div > span.price-new", "92.29€")
    .assert.visible("div:nth-child(3) > form > div")
    .assert.textContains("div:nth-child(3) > form > div > div.content > div.description > div > span.price-new", "114.89€")
  },
};
