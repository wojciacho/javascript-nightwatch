module.exports = {
  url: "https://itera-qa.azurewebsites.net/home/automation",
  elements: {
    name: "#name",
    phoneNumber: "#phone",
    email: "#email",
    password: "#password",
    address: "#address",
    submit: '[name="submit"]',
    gender: "#male",
    days: "#thursday",
    country: ".custom-select",
    countryOption: 'option[value="2"]',
    experience: {
      selector: "//label[@for= '2years']",
      locateStrategy: "xpath",
    },
    framework: {
      selector: "//label[@for= 'testng']",
      locateStrategy: "xpath",
    },
  },
  commands: {
    setName(value) {
      return this.setValue("@name", value);
    },
    setPhoneNumber(value) {
      return this.setValue("@phoneNumber", value);
    },
    setEmail(value) {
      return this.setValue("@email", value);
    },
    userPassword(value) {
      return this.setValue("@password", value);
    },
    setAddress(value) {
      return this.setValue("@address", value);
    },
    submit() {
      return this.click("@submit");
    },
    gender() {
      return this.click("@gender");
    },
    days() {
      return this.click("@days");
    },
    country() {
      return this.click("@country").click("@countryOption");
    },
    experience() {
      return this.click("@experience");
    },
    framework() {
      return this.click("@framework");
    },
  },
};
