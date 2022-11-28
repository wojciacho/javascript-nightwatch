module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      loginEl: {
        selector: '//a[@href="/login"]',
        locateStrategy: "xpath",
      },
      signUpNameEl: 'form[action="/signup"] > input[type="text"]',
      signUpEmailEl: 'form[action="/signup"] > input[type="email"]',
      genderEl: '#uniform-id_gender1',
      passwordEl: '#password',
      daysEl: '#days',
      optionDaysEl: 'option[value="6"]',
      monthsEl: '#months',
      optionMonthsEl: 'option[value="6"]',
      yearsEl: '#years',
      optionYearsEl: 'option[value="2000"]',
      firstNameEl: '#first_name',
      lastNameEl: '#last_name',
      addressEl: '#address1',
      countryEl: '#country',
      optionSelectCountry: 'option[value="United States"]',
      stateEl: '#state',
      cityEl: '#city',
      zipCodeEl: '#zipcode',
      phoneEl: '#mobile_number',
      btnCreate: 'button[data-qa="create-account"]',
      continueBtnEl: ".pull-right >.btn-primary",
      deleteAccountEl: {
        selector: '//a[@href="/delete_account"]',
        locateStrategy: "xpath",
      },
      btnSignUpEl: 'form[action="/signup"] > .btn-default',
      
    },
    commands: {
      clickLogin() {
        return this
        .click("@loginEl");
      },
      typeName(value) {
        return this
        .clearValue("@signUpNameEl")
        .setValue("@signUpNameEl", value)
      },
      typeEmail(value) {
        return this
        .clearValue("@signUpEmailEl")
        .setValue("@signUpEmailEl", value)
      },
      clickGender() {
        return this
        .click('@genderEl')
      },
      typePassword(value) {
        return this
        .clearValue("@passwordEl")
        .setValue("@passwordEl", value)
      },
      setDays() {
        return this
        .click("@daysEl")
        .click("@optionDaysEl")
      },
      setMonths() {
        return this
        .click("@monthsEl")
        .click("@optionMonthsEl")
      },
      setYears() {
        return this
        .click("@yearsEl")
        .click("@optionYearsEl")
      },
      typeFirstName(value) {
        return this
        .clearValue("@firstNameEl")
        .setValue("@firstNameEl", value)
      },
      typeLastName(value) {
        return this
        .clearValue("@lastNameEl")
        .setValue("@lastNameEl", value)
      },
      typeAddress(value) {
        return this
        .clearValue("@addressEl")
        .setValue("@addressEl", value)
      },
      setCountry() {
        return this
        .click('@countryEl')
        .click("@optionSelectCountry")
      },
      typeState(value) {
        return this
        .clearValue("@stateEl")
        .setValue("@stateEl", value)
      },
      typeCity(value) {
        return this
        .clearValue("@cityEl")
        .setValue("@cityEl", value)
      },
      typeZipCode(value) {
        return this
        .clearValue("@zipCodeEl")
        .setValue("@zipCodeEl", value)
      },
      typePhone(value) {
        return this
        .clearValue("@phoneEl")
        .setValue("@phoneEl", value)
      },
      clickCreateAccount() {
        return this
        .click("@btnCreate")
      },
      clickContinue() {
        return this
        .click("@continueBtnEl")
      },
      clickSignUp() {
        return this
        .click("@btnSignUpEl")
      },
      clickDeleteAccount() {
        return this
        .click("@deleteAccountEl")
      }
    },
  };
  