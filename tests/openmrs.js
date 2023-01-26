module.exports = {
  "@tags": ["openmrs"],
  Opencart(browser) {
    const page = browser.page.openmrsobject();

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
   .clickRegisterPatient()

   browser
   .assert.urlContains("https://demo.openmrs.org/openmrs/registrationapp/registerPatient.page?appId=referenceapplication.registrationapp.registerPatient")

   page
   .typeGivenName("Wojciech")
   .typeMiddleName("Piotr")
   .typeFamilyName("Wojciechowski")
   .clickNext()
   .clickGender()
   .clickNext()
   .typeDay("06")
   .selectMonth()
   .typeYear("2000")
   .clickNext()
   .typeAddress("Sloneczna")
   .typeCity("Warszawa")
   .typeState("Mazowieckie")
   .typeCountry("Poland")
   .typePostalCode("12345")
   .clickNext()
   .typePhone("123456789")
   .clickNext()
   .clickRelation()
   .typePersonName("Wojciech")
   .clickNext()

   browser
   .assert.textContains("#dataCanvas > div > p:nth-child(1)", "Name: Wojciech, Piotr, Wojciechowski")
   .assert.textContains("#dataCanvas > div > p:nth-child(2)", "Gender: Male")
   .assert.textContains("#dataCanvas > div > p:nth-child(3)", "Birthdate: 06, June, 2000")
   .assert.textContains("#dataCanvas > div > p:nth-child(4)", "Address: Sloneczna, Warszawa, Mazowieckie, Poland, 12345")
   .assert.textContains("#dataCanvas > div > p:nth-child(5)", "Phone Number: 123456789")
   .assert.textContains("#dataCanvas > div > p:nth-child(6)", "Relatives: Wojciech - Patient")

   page
   .clickSubmit()

   browser
   .assert.visible("div.demographics.col-12.col-sm-7.col-md-8 > div > div.col-12.col-sm-auto > h1")
   .assert.textContains("div.col-12.col-sm-auto > h1 > span:nth-child(1) > span", "Wojciech")
  },
};
