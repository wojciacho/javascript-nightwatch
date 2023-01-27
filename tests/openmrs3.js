module.exports = {
  "@tags": ["openmrs3"],
  Opencart(browser) {
    const page = browser.page.openmrsobject3();

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

   .assert.visible("#patient-search-results-table > tbody > tr.odd > td:nth-child(2)")
   .assert.textContains("#patient-search-results-table > tbody > tr.odd > td:nth-child(2)", "Patient2 Chakroun Chakroun")

   page
   .clickPatient()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/clinicianfacing/patient.page?patientId=4bf4651f-4dba-4f4a-8557-19dbdbbdd1cd")
   .assert.textContains("div > div.col-12.col-sm-auto > h1 > span:nth-child(1) > span", "Patient2")

   page
   .clickDelete()
   .typeReason("1")
   .clickConfirm()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/findpatient/findPatient.page?app=coreapps.findPatient")
  },
};
