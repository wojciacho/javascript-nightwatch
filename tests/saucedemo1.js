module.exports = {
  "@tags": ["saucedemo1"],
  Saucedemo(browser) {
    const page = browser.page.saucedemoobject1();
    const userName = "standard_user";
    const password = "secret_sauce";
    const firstName = "Wojciech";
    const lastName = "Wojciech";
    const zipCode = 12345;

    page
      .navigate()
      .setUserName(userName)
      .setUserPassword(password)
      .login()
      .addFirstBackpack()
      .addSecondBackpack()
      .clickOnBasket()
      .clickCheckout()
      .userFirstName(firstName)
      .userLastName(lastName)
      .postalCode(zipCode)
      .pay()
      .clickFinish()
      .returnHome();

      browser
      .assert.urlContains('inventory.html', 'Params: Query is inventory')
      .assert.textMatches('#item_4_title_link', 'Sauce Labs Backpack', 'Params: Item 4 is Sauce Labs Backpack')
      .assert.textMatches('#item_0_title_link', 'Sauce Labs Bike Light', 'Params: Item 4 is Sauce Bike Light')
      .assert.textMatches("#item_2_title_link", 'Sauce Labs Onesie', 'Params: Item 2 is Sauce Labs Onesie')
  },
};
