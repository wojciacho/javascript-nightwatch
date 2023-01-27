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
    deleteEl: {
      selector: '/html/body/div[1]/div[3]/div[9]/div[2]/div/ul/li[8]/a/div/div[2]',
      locateStrategy: 'xpath',
    },
    reasonEl: '#delete-reason',
    confirmEl: {
      selector: '/html/body/div[5]/div/div/div[2]/button[1]',
      locateStrategy: 'xpath',
    },
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
    clickDelete() {
      return this
      .click("@deleteEl")
    },
    typeReason(value) {
      return this
      .clearValue("@reasonEl")
      .setValue("@reasonEl", value)
    },
    clickConfirm() {
      return this
      .click("@confirmEl")
    }
  },
};
