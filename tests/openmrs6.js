module.exports = {
  "@tags": ["openmrs6"],
  Opencart(browser) {
    const page = browser.page.openmrsobject6();

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
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/clinicianfacing/patient.page?patientId=a9c1272d-2029-4790-89b2-1691b0c045be")
   .assert.textContains("div > div.col-12.col-sm-auto > h1 > span:nth-child(1) > span", "Patient2")

   page
   .clickEdit()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/registrationapp/registrationSummary.page?patientId=a9c1272d-2029-4790-89b2-1691b0c045be&appId=referenceapplication.registrationapp.registerPatient&returnUrl=%2Fopenmrs%2Fcoreapps%2Fclinicianfacing%2Fpatient.page%3FpatientId%3Da9c1272d-2029-4790-89b2-1691b0c045be%26")

    page
   .clickEditLink()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/registrationapp/editSection.page?patientId=513&returnUrl=%2Fopenmrs%2Fregistrationapp%2FregistrationSummary.page%3FpatientId%3D513%26appId%3Dreferenceapplication.registrationapp.registerPatient&sectionId=demographics&appId=referenceapplication.registrationapp.registerPatient&#visits")

   page
   .typeName("Wojciech")
   .clickNext()
   .clickNext()
   .clickNext()

   browser
   .assert.textContains("#dataCanvas > div > p:nth-child(1)", "Wojciech")

   page
   .clickSubmit()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/registrationapp/registrationSummary.page?patientId=513&appId=referenceapplication.registrationapp.registerPatient")
   .assert.visible(" div.demographics.col-12.col-sm-7.col-md-8 > div > div.col-12.col-sm-auto > h1 > span:nth-child(1) > span")
   .assert.textContains(" div.demographics.col-12.col-sm-7.col-md-8 > div > div.col-12.col-sm-auto > h1 > span:nth-child(1) > span", "Wojciech")
  },
};
