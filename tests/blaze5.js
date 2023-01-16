module.exports = {
  "@tags": ["blaze5"],
  Blaze(browser) {
    const page = browser.page.blazeobject5();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/");

    page
    .clickMonitors()

    browser
    .assert.visible("#tbodyid > div:nth-child(1) > div > div > h4 > a")
    .assert.textContains("div:nth-child(1) > div > div > h4 > a", "Apple monitor 24")

    .assert.visible("div:nth-child(2) > div > div > h4 > a")
    .assert.textContains("div:nth-child(2) > div > div > h4 > a", "ASUS Full HD")

    page
    .clickAppleMonitor()

    browser
    .assert.urlContains("https://www.demoblaze.com/prod.html?idp_=10")
    .assert.textContains("#tbodyid > .name", "Apple monitor 24")
    .assert.textContains("#tbodyid > .price-container", "$400")

    page
    .clickAddToCart()

    browser
    .pause(1000)

    page
    .clickCart()
    
    browser
    .acceptAlert()
    .assert.urlContains("https://www.demoblaze.com/cart.html")
    .assert.visible("#tbodyid > tr:nth-child(1)")
    .assert.textContains("#totalp", "400")

    page
    .clickHome()
    .clickMonitors()

    browser
    .assert.visible("#tbodyid > div:nth-child(1) > div > div > h4 > a")
    .assert.textContains("div:nth-child(1) > div > div > h4 > a", "Apple monitor 24")

    .assert.visible("div:nth-child(2) > div > div > h4 > a")
    .assert.textContains("div:nth-child(2) > div > div > h4 > a", "ASUS Full HD")

    page
    .clickAsusMonitor()

    browser
    .assert.urlContains("https://www.demoblaze.com/prod.html?idp_=14")
    .assert.textContains("#tbodyid > .name", "ASUS Full HD")
    .assert.textContains("#tbodyid > .price-container", "$230")

    page
    .clickAddToCart()

    browser
    .pause(1000)
    .acceptAlert()

    page
    .clickCart()
    
    browser
    .assert.urlContains("https://www.demoblaze.com/cart.html")
    .assert.visible("#tbodyid > tr:nth-child(2)")
    .assert.textContains("#totalp", "630")

    page
    .clickDeleteFirstItem()

    browser
    .assert.urlContains("https://www.demoblaze.com/cart.html")
    .assert.visible("#tbodyid > tr:nth-child(1)")
    .assert.textContains("#totalp", "230")
    .pause(1000)

    page
    .clickDeleteSecondItem()

    browser
    .assert.not.visible("#totalp")
  },
};
