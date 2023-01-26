module.exports = {
  url: "https://demo.openmrs.org/openmrs/login.htm",
  elements: { 
    usernameEl: '#username',
    passwordEl: '#password',
    loginButton: '#loginButton',
    locationEl: '#sessionLocation >li[value="6"]',
    registerPatientEl: {
      selector: '/html/body/div/div[3]/div[3]/div/a[3]',
      locateStrategy: 'xpath',
    },
    givenName: 'input[name="givenName"]',
    middleName: 'input[name="middleName"]',
    familyName: 'input[name="familyName"]',
    nextEl: '#next-button',
    gender: '#gender-field',
    genderOption: 'option[value="M"]',
    dayEl: '#birthdateDay-field',
    monthEl: '#birthdateMonth-field',
    monthOption: 'option[value="6"]',
    yearEl: '#birthdateYear-field',
    addressEl: '#address1',
    cityEl: '#cityVillage',
    stateEl: '#stateProvince',
    countryEl: '#country',
    postalCode: '#postalCode',
    phoneEl: 'input[name="phoneNumber"]',
    relationType: '#relationship_type',
    relationOption: 'option[data-val="Patient"]',
    personName: 'input.person-typeahead.ng-pristine.ng-untouched.ng-valid.ng-empty',
    submitEl: '#submit',
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
    clickRegisterPatient() {
      return this
      .click("@registerPatientEl")
    },
    typeGivenName(value) {
      return this
      .clearValue("@givenName")
      .setValue("@givenName", value)
    },
    typeFamilyName(value) {
      return this
      .clearValue("@familyName")
      .setValue("@familyName", value)
    },
    typeMiddleName(value) {
      return this
      .clearValue("@middleName")
      .setValue("@middleName", value)
    },
    clickNext() {
      return this
      .click("@nextEl")
    },
    clickGender() {
      return this
      .click("@gender")
      .click("@genderOption")
    },
    typeDay(value) {
      return this
      .clearValue("@dayEl")
      .setValue("@dayEl", value)
    },
    selectMonth() {
      return this
      .click("@monthEl")
      .click("@monthOption")
    },
    typeYear(value) {
      return this
      .clearValue("@yearEl")
      .setValue("@yearEl", value)
    },
    typeAddress(value) {
      return this
      .clearValue("@addressEl")
      .setValue("@addressEl", value)
    },
    typeCity(value) {
      return this
      .clearValue("@cityEl")
      .setValue("@cityEl", value)
    },
    typeState(value) {
      return this
      .clearValue("@stateEl")
      .setValue("@stateEl", value)
    },
    typeCountry(value) {
      return this
      .clearValue("@countryEl")
      .setValue("@countryEl", value)
    },
    typePostalCode(value) {
      return this
      .clearValue("@postalCode")
      .setValue("@postalCode", value)
    },
    typePhone(value) {
      return this
      .clearValue("@phoneEl")
      .setValue("@phoneEl", value)
    },
    clickRelation() {
      return this
      .click("@relationType")
      .click("@relationOption")
    },
    typePersonName(value) {
      return this
      .clearValue("@personName")
      .setValue("@personName", value)
    },
    clickSubmit() {
      return this
      .click("@submitEl")
    }
  },
};
