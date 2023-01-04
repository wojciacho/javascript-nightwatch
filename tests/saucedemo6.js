module.exports = {
  "@tags": ["saucedemo6"],
  Saucedemo(browser) {
    const page = browser.page.saucedemoobject6();
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
    .clickBackpack()

   browser
   .assert.urlContains("https://www.saucedemo.com/inventory-item.html?id=4")
   .assert.textContains(".inventory_details_name", "Sauce Labs Backpack")
   .assert.textContains(".inventory_details_price", "$29.99")
   .assert.textContains(".inventory_details_desc", "unequaled laptop and tablet protection")
   .pause(1000)

   page
   .clickAddToCart()

   browser
    .assert.textContains("#remove-sauce-labs-backpack", "REMOVE")
    .assert.textContains(".shopping_cart_badge", "1")

    page
    .clickRemove()

    browser
    .assert.textContains("#add-to-cart-sauce-labs-backpack", "ADD TO CART")

    page
    .clickBack()

   browser
    .assert.urlContains("https://www.saucedemo.com/inventory.html")
    .assert.visible(".title")
    .assert.titleEquals("Swag Labs")
  },
};
