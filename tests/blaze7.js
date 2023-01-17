module.exports = {
  "@tags": ["blaze7"],
  Blaze(browser) {
    const page = browser.page.blazeobject7();

    page
    .navigate()

    browser
    .assert.titleContains("STORE")
    .assert.urlContains("https://www.demoblaze.com/");

    page
    .clickPhones()

    browser
    .assert.visible("#tbodyid > div:nth-child(1) > div > div > h4 > a")
    .assert.textContains("#tbodyid > div:nth-child(1) > div > div > h4 > a", "Samsung galaxy s6")

    .assert.visible("#tbodyid > div:nth-child(2) > div > div > h4 > a")
    .assert.textContains("#tbodyid > div:nth-child(2) > div > div > h4 > a", "Nokia lumia 1520")

    page
    .clickSamsung()

    browser
    .assert.urlContains("https://www.demoblaze.com/prod.html?idp_=1")
    .assert.textContains("#tbodyid > .name", "Samsung galaxy s6")
    .assert.textContains("#tbodyid > .price-container", "$360")
    .assert.visible("#more-information > p")
    .assert.textContains("#more-information > p", "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM.")

    page
    .clickHome()

    browser
    .assert.urlContains("https://www.demoblaze.com/index.html")

    page
    .clickPhones()

    browser
    .assert.visible("#tbodyid > div:nth-child(1) > div > div > h4 > a")
    .assert.textContains("#tbodyid > div:nth-child(1) > div > div > h4 > a", "Samsung galaxy s6")

    .assert.visible("#tbodyid > div:nth-child(2) > div > div > h4 > a")
    .assert.textContains("#tbodyid > div:nth-child(2) > div > div > h4 > a", "Nokia lumia 1520")

    page
    .clickNokia()

    browser
    .assert.urlContains("https://www.demoblaze.com/prod.html?idp_=2")
    .assert.textContains("#tbodyid > .name", "Nokia lumia 1520")
    .assert.textContains("#tbodyid > .price-container", "$820")
    .assert.visible("#more-information > p")
    .assert.textContains("#more-information > p", "The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.")
  },
};
