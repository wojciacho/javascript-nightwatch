module.exports = {
  "@tags": ["blaze"],
  Blaze(browser) {
    const page = browser.page.blazeobject1();
    const name = makeRandomString(5);
    const card = "0000 0000 0000 0000";
    const country = "Poland";
    const city = "Warszawa";
    const month = "July";
    const year = 2022;

    page
    .navigate()
    .clickLaptops()
    .clickMacBook();

    browser.assert
      .urlContains("https://www.demoblaze.com/prod.html?idp_=11")
      .assert.textMatches(".name", "MacBook air")
      .assert.textContains(".price-container", "$700 *includes tax");

    page
    .clickBtn()
    .clickCart();

    browser.assert.textMatches(".btn-success", "Place Order")
            .assert.textMatches(".success", "MacBook air")

    page
      .clickSuccessBtn()
      .typeName(name)
      .typeCountry(country)
      .typeCity(city)
      .typeCard(card)
      .typeMonth(month)
      .typeYear(year)
      .clickPurchase()
      .pause(1000)
      .clickButtonOk()
      .clickNav();

    browser.assert
      .titleContains("STORE")
      .assert.urlContains("https://www.demoblaze.com/");

    function makeRandomString(length) {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }
  },
};
