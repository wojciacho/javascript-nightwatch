module.exports = {
  "@tags": ["nopcommerce16"],
  Opencart(browser) {
    const page = browser.page.nopobject16();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.visible("div.header-menu > ul.top-menu.notmobile > li:nth-child(3) > a")
    .moveToElement("div.header-menu > ul.top-menu.notmobile > li:nth-child(3) > a", 0, 0)
    .waitForElementVisible("ul.top-menu.notmobile > li:nth-child(3) > ul > li:nth-child(2) > a", 100)

   page
   .clickClothing()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/clothing")
   .assert.visible(".page-title > h1")
   .assert.textContains(".page-title > h1", "Clothing")

   .assert.visible("div:nth-child(1) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(1) > div > div.details > h2 > a", "Custom T-Shirt")

   .assert.visible("div:nth-child(2) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(2) > div > div.details > h2 > a", "Levi's 511 Jeans")

   .assert.visible("div:nth-child(3) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(3) > div > div.details > h2 > a", "Nike Tailwind Loose Short-Sleeve Running Shirt")
   
   .assert.visible("div:nth-child(4) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(4) > div > div.details > h2 > a", "Oversized Women T-Shirt")

   page
   .clickShirt()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/custom-t-shirt")
   .assert.visible(".product-name")
   .assert.textContains(".product-name", "Custom T-Shirt")

   page
   .typeText("hello")
   .clickAddToCart()
   
   browser
   .assert.urlContains("https://demo.nopcommerce.com/custom-t-shirt")
   .assert.visible(".content")
   .assert.textContains(".content", "The product has been added to your shopping cart")

   page
   .clickCart()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/cart")

   .assert.visible(".cart")

   .assert.visible(".product-name")
   .assert.textContains(".product-name", "Custom T-Shirt")

   .assert.visible(".product-subtotal")
   .assert.textContains(".product-subtotal", "$15.00")
  },
};
