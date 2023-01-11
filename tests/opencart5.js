module.exports = {
  "@tags": ["opencart5"],
  Opencart(browser) {
    const page = browser.page.opencartobject5();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
    .execute('scrollTo(0, 1000)')

    page
    .clickAboutUs()
    
    browser
    .assert.urlContains("https://demo.opencart.com/index.php?route=information/information&language=en-gb&information_id=1")
    .assert.visible("#information-information > ul > li:nth-child(2) > a")
    .assert.textContains("#information-information > ul > li:nth-child(2) > a", "About Us")
    .assert.visible("#content > h1")
    .assert.textContains("#content > h1", "About Us")
    .assert.visible("#content > p")
    .assert.textContains("#content > h1", "About Us")
  },
};
