module.exports = {
  url: "https://www.saucedemo.com",
  elements: {
    mainQueryInput: 'input[name="user-name"]',
    passwordQuery: 'input[name="password"]',
    submitButton: "#login-button",
    basket: "#shopping_cart_container",
    checkout: "#checkout",
    finish: "#finish",
    home: "#back-to-products",
    firstBackpack: "#add-to-cart-sauce-labs-backpack",
    secondBackpack: "#add-to-cart-sauce-labs-bike-light",
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    zipCode: 'input[name="postalCode"]',
    continueToPay: "#continue",
  },
  commands: [
    {
      setUserName(value) {
        return this.clearValue("@mainQueryInput").setValue(
          "@mainQueryInput",
          value
        );
      },
      setUserPassword(value) {
        return this.clearValue("@passwordQuery").setValue(
          "@passwordQuery",
          value
        );
      },
      login() {
        return this.click("@submitButton");
      },
      clickOnBasket() {
        return this.click("@basket");
      },
      clickCheckout() {
        return this.click("@checkout");
      },
      clickFinish() {
        return this.click("@finish");
      },
      returnHome() {
        return this.click("@home");
      },
      addFirstBackpack() {
        return this.click("@firstBackpack");
      },
      addSecondBackpack() {
        return this.click("@secondBackpack");
      },
      userFirstName(value) {
        return this.clearValue("@firstName").setValue("@firstName", value);
      },
      userLastName(value) {
        return this.clearValue("@lastName").setValue("@lastName", value);
      },
      postalCode(value) {
        return this.clearValue("@zipCode").setValue("@zipCode", value);
      },
      pay() {
        return this.click("@continueToPay");
      },
    },
  ],
};
