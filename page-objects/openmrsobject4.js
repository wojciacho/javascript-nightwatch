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
    visitEl: {
      selector: '/html/body/div[1]/div[3]/div[9]/div[2]/div/ul/li[1]/a/div/div[2]',
      locateStrategy: 'xpath',
    },
    confirmEl: {
      selector: '/html/body/div[5]/div/div/div[2]/button[1]',
      locateStrategy: 'xpath',
    },
    endVisitEl: {
      selector: '/html/body/div[1]/div[3]/div[9]/div/div[1]/div[3]/div[1]/div[2]/a[1]',
      locateStrategy: 'xpath'
    },
    visitButton: '#end-visit-dialog > div.dialog-content > button.confirm.right'
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
    clickVisit() {
      return this
      .click("@visitEl")
    },
    clickConfirm() {
      return this
      .click("@confirmEl")
    },
    clickEndVisit() {
      return this
      .click("@endVisitEl")
    },
    clickConfirmEnd() {
      return this
      .click("@visitButton")
    }
  },
};
