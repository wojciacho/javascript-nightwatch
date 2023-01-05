module.exports = {
  "@tags": ["blaze2"],
  Blaze(browser) {
    const page = browser.page.blazeobject2();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/");

    page
    .clickMonitors()

    browser
    .assert.visible("#tbodyid > div:nth-child(1)")
    .assert.visible("#tbodyid > div:nth-child(2)")
    .assert.textEquals("div:nth-child(1) > div > div > h4 > a", "Apple monitor 24")
    .assert.textEquals("div:nth-child(2) > div > div > h4 > a", "ASUS Full HD")
    .assert.textEquals("#tbodyid > div:nth-child(1) > div > div > h5", "$400")
    .assert.textEquals("#tbodyid > div:nth-child(2) > div > div > h5", "$230")

    page
    .clickAppleMonitor()

    browser
    .assert.urlContains("https://www.demoblaze.com/prod.html?idp_=10")
    .assert.textContains("#tbodyid > .name", "Apple monitor 24")

    page
    .clickHome()

    browser
    .assert.urlContains("https://www.demoblaze.com/index.html")

    page
    .clickMonitors()
    
    browser
    .assert.visible("#tbodyid > div:nth-child(1)")
    .assert.visible("#tbodyid > div:nth-child(2)")
    .assert.textEquals("div:nth-child(1) > div > div > h4 > a", "Apple monitor 24")
    .assert.textEquals("div:nth-child(2) > div > div > h4 > a", "ASUS Full HD")
    .assert.textEquals("#tbodyid > div:nth-child(1) > div > div > h5", "$400")
    .assert.textEquals("#tbodyid > div:nth-child(2) > div > div > h5", "$230")

    page
    .clickAsusMonitor()

    browser
    .assert.urlContains("https://www.demoblaze.com/prod.html?idp_=14")
    .assert.textContains("#tbodyid > .name", "ASUS Full HD")
  },
};
