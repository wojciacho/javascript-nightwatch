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
    remove1: "#remove-sauce-labs-backpack",
    remove2: "#remove-sauce-labs-bike-light",
    continueShopping: "#continue-shopping",
    tshirt: "#add-to-cart-sauce-labs-bolt-t-shirt",
  },
  commands: [
    {
      setUserName(value) {
        return this.setValue("@mainQueryInput", value);
      },
      setUserPassword(value) {
        return this.setValue("@passwordQuery", value);
      },
      login() {
        return this.click("@submitButton");
      },
      clickOnBasket() {
        return this.click("@basket");
      },
      checkout() {
        return this.click("@checkout");
      },
      finish() {
        return this.click("@finish");
      },
      returnHome() {
        return this.click("@home");
      },
      addBackpack() {
        return this.click("@firstBackpack").click("@secondBackpack");
      },
      firstName(value) {
        return this.setValue("@firstName", value);
      },
      lastName(value) {
        return this.setValue("@lastName", value);
      },
      setZipCode(value) {
        return this.setValue("@zipCode", value);
      },
      continueToPay() {
        return this.click("@continueToPay");
      },
      deleteLogin() {
        return this.clearValue("@mainQueryInput").clearValue("@passwordQuery");
      },
      setValidUserName(value) {
        return this.setValue("@mainQueryInput", value);
      },
      setValidUserPassword(value) {
        return this.setValue("@passwordQuery", value);
      },
      deleteBackpack() {
        return this.click("@remove1").click("@remove2");
      },
      continueShopping() {
        return this.click("@continueShopping");
      },
      addShirt() {
        return this.click("@tshirt");
      },
    },
  ],
};
