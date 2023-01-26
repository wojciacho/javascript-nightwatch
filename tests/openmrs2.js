module.exports = {
  "@tags": ["openmrs2"],
  Opencart(browser) {
    const page = browser.page.openmrsobject2();

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
   .assert.textContains(".col-12 > h4", "Logged in as Super User (admin) at Inpatient Ward.")

   page
   .clickFindPatient()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/findpatient/findPatient.page?app=coreapps.findPatient")

   .assert.visible("h2")
   .assert.textContains("h2", "Find Patient Record")

   .assert.visible("#patient-search-results-table > tbody > tr:nth-child(1) > td:nth-child(2)")
   .assert.textContains("#patient-search-results-table > tbody > tr:nth-child(1) > td:nth-child(2)", "Wojciech Piotr Wojciechowski")

   .assert.visible("#patient-search-results-table > tbody > tr:nth-child(1) > td:nth-child(5)")
   .assert.textContains("#patient-search-results-table > tbody > tr:nth-child(1) > td:nth-child(5)", "06.Jun.2000")
  },
};
