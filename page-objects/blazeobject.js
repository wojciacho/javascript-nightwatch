module.exports = {
  url: "https://www.demoblaze.com/",
  elements: {
    laptops: {
      selector: '//a[text()="Laptops"]',
      locateStrategy: "xpath",
    },
    macBook: {
      selector: '//a[text()="MacBook air"]',
      locateStrategy: "xpath",
    },
    cuteButton: ".col-lg-6",
    cart: {
      selector: "//a[text()='Cart']",
      locateStrategy: "xpath",
    },
    btnSuccess: ".btn-success",
    inputName: "#name",
    inputCountry: "#country",
    inputCity: "#city",
    inputCard: "#card",
    inputMonth: "#month",
    inputYear: "#year",
    purchase: {
      selector: "//button[text()='Purchase']",
      locateStrategy: "xpath",
    },
    buttonOk: ".sa-confirm-button-container",
      nav: "#nava"
  },
  commands: {
    clickLaptops() {
      return this.click("@laptops");
    },
    clickMacBook() {
        return this
        .click("@macBook")
    },
    clickBtn() {
        return this
        .click("@cuteButton")
    },
    clickCart() {
        return this
        .click("@cart")
    },
    clickSuccessBtn() {
        return this
        .click("@btnSuccess")
    },
    typeName(value) {
        return this
        .clearValue("@inputName")
        .setValue("@inputName", value)
    },
    typeCountry(value) {
        return this
        .clearValue("@inputCountry")
        .setValue("@inputCountry", value)
    },
    typeCity(value) {
        return this
        .clearValue("@inputCity")
        .setValue("@inputCity", value)
    },
    typeCard(value) {
        return this
        .clearValue("@inputCard")
        .setValue("@inputCard", value)
    },
    typeMonth(value) {
        return this
        .clearValue("@inputMonth")
        .setValue("@inputMonth", value)
    },
    typeYear(value) {
        return this
        .clearValue("@inputYear")
        .setValue("@inputYear", value)
    },
    clickPurchase() {
        return this
        .click("@purchase")
    },
    clickButtonOk() {
        return this
        .click("@buttonOk")
    },
    clickNav() {
        return this
        .click("@nav")
    }
  },
};
