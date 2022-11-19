module.exports = {
  url: "http://a.testaddressbook.com",
  elements: {
    signIn: "#sign-in",
    email: 'input[type="email"]',
    password: 'input[type="password"]',
    logIn: 'input[type="submit"]',
    signUp: 'a[data-test="sign-up"]',
    address: 'a[data-test="addresses"]',
    createAddress: 'a[data-test="create"]',
    firstName: 'input[name="address[first_name]"]',
    lastName: 'input[name="address[last_name]"]',
    inputAddress: 'input[name="address[address1]"]',
    inputCity: 'input[name="address[city]"]',
    selectState: '[name="address[state]"]',
    optionSelectState: 'option[value="NV"]',
    inputCode: '[name="address[zip_code]"]',
    country: "#address_country_canada",
    inputAge: 'input[type="number"]',
    webPage: 'input[type="url"]',
    phoneNumber: 'input[type="tel"]',
    hobby: "#address_interest_dance",
    note: "#address_note",
    send: 'input[type="submit"]',
  },
  commands: [
    {
      clickSignIn() {
        return this.click("@signIn");
      },
      setEmail(value) {
        return this.setValue("@email", value);
      },
      keysPassword(value) {
        return this.setValue("@password", value);
      },
      clickLogIn() {
        return this.click("@logIn");
      },
      clickSignUp() {
        return this.click("@signUp");
      },
      clickAddress() {
        return this.click("@address");
      },
      clickCreateAddress() {
        return this.click("@createAddress");
      },
      setFirstName(value) {
        return this.clearValue("@firstName").setValue("@firstName", value);
      },
      setLastName(value) {
        return this.clearValue("@lastName").setValue("@lastName", value);
      },
      typeAddress(value) {
        return this.clearValue("@inputAddress").setValue(
          "@inputAddress",
          value
        );
      },
      typeCity(value) {
        return this.clearValue("@inputCity").setValue("@inputCity", value);
      },
      clickState() {
        return this.click("@selectState").click("@optionSelectState");
      },
      typeCode(value) {
        return this.clearValue("@inputCode").setValue("@inputCode", value);
      },
      setCountry() {
        return this.click("@country");
      },
      setAge(value) {
        return this.clearValue("@inputAge").setValue("@inputAge", value);
      },
      setWebPage(value) {
        return this.clearValue("@webPage").setValue("@webPage", value);
      },
      setNumber(value) {
        return this.clearValue("@phoneNumber").setValue("@phoneNumber", value);
      },
      clickHobby() {
        return this.click("@hobby");
      },
      typeNote(value) {
        return this.clearValue("@note").setValue("@note", value);
      },
      clickSend() {
        return this.click("@send");
      },
    },
  ],
};
