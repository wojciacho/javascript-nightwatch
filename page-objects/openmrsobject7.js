module.exports = {
  url: "https://demo.openmrs.org/openmrs/login.htm",
  elements: { 
    usernameEl: '#username',
    passwordEl: '#password',
    loginButton: '#loginButton',
    locationEl: '#sessionLocation >li[value="6"]',
    appointmentEl: {
      selector: '/html/body/div/div[3]/div[3]/div/a[5]',
      locateStrategy: 'xpath',
    },
    manageEl: {
      selector: '/html/body/div/div[3]/div/div[1]/a',
      locateStrategy: 'xpath',
    },
    newServiceEl: '#content > div > div:nth-child(1) > button',
    nameEl: '#name-field',
    durationEl: '#duration-field',
    saveEl: '#save-button',
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
    clickAppointment() {
      return this
      .click("@appointmentEl")
    },
    clickManageTypes() {
      return this
      .click("@manageEl")
    },
    clickNewService() {
      return this
      .click("@newServiceEl")
    },
    typeName(value) {
      return this
      .clearValue("@nameEl")
      .setValue("@nameEl", value)
    },
    typeDuration(value) {
      return this
      .clearValue("@durationEl")
      .setValue("@durationEl", value)
    },
    clickSave() {
      return this
      .click("@saveEl")
    }
  },
};
