module.exports = {
  "@tags": ["openmrs5"],
  Opencart(browser) {
    const page = browser.page.openmrsobject5();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.openmrs.org/openmrs/login.htm")
    .assert.visible("#username")
    .assert.visible("#password")
    .assert.visible("#loginButton")
    
    page
   .typeUsername("admin")
   .typePassword("Admin123")
   .clickLocation()
   .clickLogin()

   .assert.urlContains("https://demo.openmrs.org/openmrs/referenceapplication/home.page")
   .assert.visible(".col-12 > h4")
   .assert.textContains(".col-12 > h4", "Logged in as Super User (admin) at Laboratory.")
   .assert.textContains(" #selected-location", "Laboratory")
  },
};
