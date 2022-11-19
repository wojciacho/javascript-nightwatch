module.exports = {
  "@tags": ["saucedemo2"],
  Saucedemo(browser) {
    const page = browser.page.saucedemoobject2();
    const mainQuery = "admin";
    const userPassword = "admin";
    const mainQuery2 = "standard_user";
    const userPassword2 = "secret_sauce";
    const firstName = "Wojciech";
    const lastName = "Wojciech";
    const zipCode = 12345;

    page
      .navigate()
      .setValidUserName(mainQuery)
      .setValidUserPassword(userPassword)
      .login()
      .deleteLogin()
      .setUserName(mainQuery2)
      .setUserPassword(userPassword2)
      .login()
      .addBackpack()
      .clickOnBasket()
      .deleteBackpack()
      .continueShopping()
      .addShirt()
      .clickOnBasket()
      .checkout()
      .firstName(firstName)
      .lastName(lastName)
      .setZipCode(zipCode)
      .continueToPay()
      .finish()
      .returnHome();

    browser.assert
      .urlContains("inventory.html", "Params: Query is inventory")
      .assert.textMatches(
        "#item_4_title_link",
        "Sauce Labs Backpack",
        "Params: Item 4 is Sauce Labs Backpack"
      )
      .assert.textMatches(
        "#item_0_title_link",
        "Sauce Labs Bike Light",
        "Params: Item 0 is Sauce Bike Light"
      )
      .assert.textMatches(
        "#item_2_title_link",
        "Sauce Labs Onesie",
        "Params: Item 2 is Sauce Labs Onesie"
      )
      .assert.textMatches(
        "#item_1_title_link",
        "Sauce Labs Bolt T-Shirt",
        "Params: Item 1 is Sauce Labs Bolt T-Shirt"
      )
      .saveScreenshot("tests_output/saucedemo.png");
  },
};
