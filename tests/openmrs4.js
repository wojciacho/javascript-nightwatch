module.exports = {
  "@tags": ["openmrs4"],
  Opencart(browser) {
    const page = browser.page.openmrsobject4();

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
   .assert.textContains("#patient-search-results-table > tbody > tr.odd > td:nth-child(2)", "Wojciech Piotr Wojciechowski")

   page
   .clickPatient()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/clinicianfacing/patient.page?patientId=8c67896a-0e34-4d79-b040-d8afc765b60b")
   .assert.textContains("div > div.col-12.col-sm-auto > h1 > span:nth-child(1) > span", "Wojciech")

   page
   .clickVisit()
   .clickConfirm()

   browser
   .assert.visible(".status-container")
   .assert.textContains(".status-container", "Active Visit")

   page
   .clickEndVisit()
   .clickConfirmEnd()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/coreapps/patientdashboard/patientDashboard.page?patientId=510&")
   .assert.visible("#visit-details > h4")
   .assert.textContains("#visit-details > h4", "No active visit")
  },
};
