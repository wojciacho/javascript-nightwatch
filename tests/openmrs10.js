module.exports = {
  "@tags": ["openmrs10"],
  Opencart(browser) {
    const page = browser.page.openmrsobject10();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.openmrs.org/openmrs/login.htm")
    .assert.visible('#sessionLocation >li[value="6"]')
    .assert.visible('#sessionLocation >li[value="4"]')
    .assert.visible('#sessionLocation >li[value="3"]')
    .assert.visible('#sessionLocation >li[value="7"]')
    .assert.visible('#sessionLocation >li[value="2"]')
    .assert.visible('#sessionLocation >li[value="5"]')
    .assert.visible("#username")
    .assert.visible("#password")
    .assert.visible("#loginButton")
    
    page
   .typeUsername("admin")
   .typePassword("Admin123")
   .clickLocation()
   .clickLogin()

   .assert.urlContains("https://demo.openmrs.org/openmrs/referenceapplication/home.page")
  },
};
