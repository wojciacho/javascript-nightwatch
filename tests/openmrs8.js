module.exports = {
  "@tags": ["openmrs8"],
  Opencart(browser) {
    const page = browser.page.openmrsobject8();

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
   .clickAppointment()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs//appointmentschedulingui/home.page")
   .assert.visible("#apps")

   page
   .clickManageTypes()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/appointmentschedulingui/manageAppointmentTypes.page")
   .assert.visible("#appointmentTypesTable")
   .assert.visible("#content > div > div:nth-child(1) > button")

   page
   .clickNewService()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/appointmentschedulingui/appointmentType.page")
   .assert.visible("h1")
   .assert.textContains("h1", "Service Type")

   page
   .typeName("Dentist")
   .typeDuration("30")
   .clickSave()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/appointmentschedulingui/manageAppointmentTypes.page")
   .assert.visible("#manageAppointmentsTypeTitle > h1")
   .assert.textContains("#manageAppointmentsTypeTitle > h1", "Manage Service Types")

   .assert.visible("#appointmentTypesTable > tbody > tr:nth-child(1)")
   .assert.textContains("#appointmentTypesTable > tbody > tr:nth-child(1) > td:nth-child(1)", "Dentist")
   .assert.textContains("#appointmentTypesTable > tbody > tr:nth-child(1) > td:nth-child(2)", "30")

   page
   .clickDelete()
   .clickConfirm()
   
   browser
   .assert.visible(".toast-type-success")
   .assert.textContains(".toast-type-success", "Service type has been deleted")
  },
};
