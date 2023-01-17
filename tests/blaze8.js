module.exports = {
  "@tags": ["blaze8"],
  Blaze(browser) {
    const page = browser.page.blazeobject8();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/");

    page
    .clickLaptops()

    browser
    .assert.visible("#tbodyid > div:nth-child(1) > div > div > h4 > a")
    .assert.textContains("#tbodyid > div:nth-child(1) > div > div > h4 > a", "Sony vaio i5")

    .assert.visible("#tbodyid > div:nth-child(2) > div > div > h4 > a")
    .assert.textContains("#tbodyid > div:nth-child(2) > div > div > h4 > a", "Sony vaio i7")

    page
    .clickSony5()

    browser
    .assert.urlContains("https://www.demoblaze.com/prod.html?idp_=8")
    .assert.textContains("#tbodyid > .name", "Sony vaio i5")
    .assert.textContains("#tbodyid > .price-container", "$790")
    .assert.visible("#more-information > p")
    .assert.textContains("#more-information > p", "Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro.")

    page
    .clickHome()

    browser
    .assert.urlContains("https://www.demoblaze.com/index.html")

    page
    .clickLaptops()

    browser
    .assert.visible("#tbodyid > div:nth-child(1) > div > div > h4 > a")
    .assert.textContains("#tbodyid > div:nth-child(1) > div > div > h4 > a", "Sony vaio i5")

    .assert.visible("#tbodyid > div:nth-child(2) > div > div > h4 > a")
    .assert.textContains("#tbodyid > div:nth-child(2) > div > div > h4 > a", "Sony vaio i7")

    page
    .clickSony7()

    browser
    .assert.urlContains("https://www.demoblaze.com/prod.html?idp_=9")
    .assert.textContains("#tbodyid > .name", "Sony vaio i7")
    .assert.textContains("#tbodyid > .price-container", "$790")
    .assert.visible("#more-information > p")
    .assert.textContains("#more-information > p", "REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro.")
  },
};
