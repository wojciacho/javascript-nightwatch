module.exports = {
  "@tags": ["openmrs9"],
  Opencart(browser) {
    const page = browser.page.openmrsobject9();

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
   .assert.textContains(" #selected-location", "Inpatient Ward")

   page
   .clickFindPatient()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/findpatient/findPatient.page?app=coreapps.findPatient")
   .assert.visible("h2")
   .assert.textContains("h2", "Find Patient Record")
   .assert.textContains("#patient-search-results-table > tbody > tr > td:nth-child(2)", "Harry Potter")

   page
   .clickPatient()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/clinicianfacing/patient.page?patientId=cfc00cbf-c395-407b-a8cf-affd1e1a1314")
   .assert.visible("div.col-12.col-sm-auto > h1 > span:nth-child(1) > span")
   .assert.textContains("div.col-12.col-sm-auto > h1 > span:nth-child(1) > span", "Harry")

   page
   .clickPastVisit()

   browser
   .assert.visible(".simplemodal-wrap")

   page
   .click30Day()
   .clickEndDate()
   .click1Day()
   .clickConfirm()
   
   browser
   .assert.visible(".toast-type-success")
   .assert.textContains(".toast-type-success", "Past visit successfully added")

   page
   .clickDelete()
   .clickConfirm()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/patientdashboard/patientDashboard.page?patientId=507&")
   .assert.visible("#visit-details > h4")
   .assert.textContains("#visit-details > h4", "No active visit")
  },
};
