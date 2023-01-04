module.exports = {
  "@tags": ["saucedemo5"],
  Saucedemo(browser) {
    const page = browser.page.saucedemoobject5();
    const userName = "standard_user";
    const password = "secret_sauce";

    page
    .navigate()
      
    browser
    .assert.urlContains("https://www.saucedemo.com")
    .assert.visible("#user-name")
    .assert.visible("#password")
    .assert.visible("#login-button")

    page
    .typeUserName(userName)
    .typePassword(password)
    .clickLogin()

    browser
    .assert.urlContains("https://www.saucedemo.com/inventory.html")
    .assert.visible(".title")
    .assert.titleEquals("Swag Labs")

    page
    .clickTshirt()

   browser
   .assert.urlContains("https://www.saucedemo.com/inventory-item.html?id=1")
   .assert.textContains(".inventory_details_name", "Sauce Labs Bolt T-Shirt")
   .assert.textContains(".inventory_details_price", "$15.99")
   .assert.textContains(".inventory_details_desc", "Sauce Labs bolt T-shirt")

   page
   .clickBack()

   browser
    .assert.urlContains("https://www.saucedemo.com/inventory.html")
    .assert.visible(".title")
    .assert.titleEquals("Swag Labs")
  },
};
