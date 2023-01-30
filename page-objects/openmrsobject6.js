module.exports = {
  url: "https://demo.openmrs.org/openmrs/login.htm",
  elements: { 
    usernameEl: '#username',
    passwordEl: '#password',
    loginButton: '#loginButton',
    locationEl: '#sessionLocation >li[value="6"]',
    findPatientEl: {
      selector: '/html/body/div/div[3]/div[3]/div/a[1]',
      locateStrategy: 'xpath',
    },
    patientEl: '#patient-search-results-table > tbody > tr.odd > td:nth-child(2)',
    editEl: {
      selector: '/html/body/div[1]/div[3]/div[9]/div[3]/div/ul[2]/li[6]/a/div/div[2]',
      locateStrategy: 'xpath',
    },
    editLink: '#demographics-edit-link',
    givenNameEl: 'input[name="givenName"]',
    nextEl: '#next-button',
    submitBtn: 'button[type="submit"]'
  },
  commands: {
    typeUsername(value) {
      return this
      .clearValue("@usernameEl")
      .setValue("@usernameEl", value)
    },
    typePassword(value) {
      return this
      .clearValue("@passwordEl")
      .setValue("@passwordEl", value)
    },
    clickLocation() {
      return this
      .click("@locationEl")
    },
    clickLogin() {
      return this
      .click("@loginButton")
    },
    clickFindPatient() {
      return this
      .click("@findPatientEl")
    },
    clickPatient() {
      return this
      .click("@patientEl")
    },
    clickEdit() {
      return this
      .click("@editEl")
    },
    clickEditLink() {
      return this
      .click("@editLink")
    },
    typeName(value) {
      return this
      .clearValue("@givenNameEl")
      .setValue("@givenNameEl", value)
    },
    clickNext() {
      return this
      .click("@nextEl")
    },
    clickSubmit() {
      return this
      .click("@submitBtn")
    }
  },
};
