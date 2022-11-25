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
      addToCartFirstEl: 'a[data-product-id="1"]',
      viewCartEl: {
        selector: '//a[@href="/view_cart"]',
        locateStrategy: "xpath"
      },
      btnSuccess: ".modal-footer > .btn-success",
      checkoutEl: '.col-sm-6 > .btn-default',
      deleteAccountEl: {
        selector: '//a[@href="/delete_account"]',
        locateStrategy: "xpath",
      },
      btnSignUpEl: 'form[action="/signup"] > .btn-default',
      commentEl: ".form-control",
      placeOrderEl: {
        selector: '//a[@href="/payment"]',
        locateStrategy: "xpath"
      },
      nameCardEl: 'input[name="name_on_card"]',
      cardNumberEl: 'input[name="card_number"]',
      cvcEl: 'input[name="cvc"]',
      expirationEl: 'input[name="expiry_month"]',
      expirationYearEl: 'input[name="expiry_year"]',
      confirmOrderEl: '.submit-button',

    },
    commands: {
      clickLogin() {
        return this
        .click("@loginEl");
      },
      typeName(value) {
        return this
        .clearValue('@signUpNameEl')
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
      clickAddToCart() {
        return this
        .click("@addToCartFirstEl")
      },
      clickCart() {
        return this
        .click("@viewCartEl")
      },
      clickButtonOk() {
        return this
        .click("@btnSuccess")
      },
      clickCheckout() {
        return this
        .click("@checkoutEl")
      },
      clickDeleteAccount() {
        return this
        .click("@deleteAccountEl")
      },
      clickSignUp() {
        return this
        .click("@btnSignUpEl")
      },
      typeComment(value) {
        return this
        .clearValue("@commentEl")
        .setValue("@commentEl", value)
      },
      clickPlaceOrder() {
        return this
        .click("@placeOrderEl")
      },
      typeCardName(value) {
        return this
        .clearValue("@nameCardEl")
        .setValue("@nameCardEl", value)
      },
      typeCardNumber(value) {
        return this
        .clearValue("@cardNumberEl")
        .setValue("@cardNumberEl", value)
      },
      typeCvc(value) {
        return this
        .clearValue('@cvcEl')
        .setValue("@cvcEl", value)
      },
      typeExpirationM(value) {
        return this
        .clearValue("@expirationEl")
        .setValue("@expirationEl", value)
      },
      typeExpirationY(value) {
        return this
        .clearValue("@expirationYearEl")
        .setValue("@expirationYearEl", value)
      },
      clickConfirmOrder() {
        return this
        .click("@confirmOrderEl")
      }
    },
  };
  