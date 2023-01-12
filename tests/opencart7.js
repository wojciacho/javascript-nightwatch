module.exports = {
  "@tags": ["opencart7"],
  Opencart(browser) {
    const page = browser.page.opencartobject7();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
    .moveToElement("#narbar-menu > ul > li:nth-child(2) > a", 10, 10)
    .waitForElementVisible("#narbar-menu > ul > li:nth-child(2) > div > a", 1000)

    page
    .clickAllLaptops()

    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=18")
    .execute('scrollTo(0, 500)')

    page
    .clickCompareHP()

    browser
    .assert.visible(".alert-success")
    .assert.textContains(".alert-success", "Success: You have added HP LP3065 to your product comparison")
  },
};
