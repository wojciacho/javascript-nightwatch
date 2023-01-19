module.exports = {
  "@tags": ["blaze10"],
  Blaze(browser) {
    const page = browser.page.blazeobject10();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/")

    page
    .clickPhones()

    browser
    .assert.urlContains("https://www.demoblaze.com/#")
    .execute('scrollTo(0, 1300)')

    .assert.visible("#footc")
    .assert.visible("#fotcont > div:nth-child(1)")
    .assert.visible("#fotcont > div:nth-child(2)")
    .assert.visible("#fotcont > div:nth-child(3)")

    .assert.textContains("#fotcont > div:nth-child(1) > div > div > h4 > b", "About Us")
    .assert.textContains("#fotcont > div.col-sm-3.col-lg-3.col-md-3 > div > div > h4 > b", "Get in Touch")

    .assert.textContains("#fotcont > div:nth-child(1) > div > div > p", "massively scalable platform makes that a reality")
    .assert.textContains("#fotcont > div.col-sm-3.col-lg-3.col-md-3 > div > div", "Address: 2390 El Camino Real")
  },
};
