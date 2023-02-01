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
    patientEl: '#patient-search-results-table > tbody > tr > td:nth-child(2)',
    pastVisitEl: {
      selector: '/html/body/div[1]/div[3]/div[9]/div[2]/div/ul/li[2]/a/div/div[2]',
      locateStrategy: 'xpath',
    },
    day30El: {
      selector: '/html/body/div[2]/div[3]/table/tbody/tr[1]/td[2]',
      locateStrategy: 'xpath'
    },
    endDateEl: {
      selector: '/html/body/div[5]/div/div/div[2]/p[2]/span/span[1]/input',
      locateStrategy: 'xpath',
    },
    day1El: {
      selector: '/html/body/div[3]/div[3]/table/tbody/tr[6]/td[4]',
      locateStrategy: 'xpath'
    },
    confirmEl: '.simplemodal-wrap > .simplemodal-data > .dialog-content > .confirm',
    deleteEl: '#deleteVisitLink',
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
    clickPastVisit() {
      return this
      .click("@pastVisitEl")
    },
    click30Day() {
      return this
      .click("@day30El")
    },
    clickEndDate() {
      return this
      .click("@endDateEl")
    },
    click1Day() {
      return this
      .click("@day1El")
    },
    clickConfirm() {
      return this
      .click("@confirmEl")
    },
    clickDelete() {
      return this
      .click("@deleteEl")
    }
  },
};
