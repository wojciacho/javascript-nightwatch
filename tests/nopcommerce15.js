module.exports = {
  "@tags": ["nopcommerce15"],
  Opencart(browser) {
    const page = browser.page.nopobject15();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.visible("div.header-menu > ul.top-menu.notmobile > li:nth-child(5) > a")

   page
   .clickBooks()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/books")
   .assert.visible(".page-title > h1")
   .assert.textContains(".page-title > h1", "Books")

   .assert.visible("div:nth-child(1) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(1) > div > div.details > h2 > a", "Fahrenheit 451 by Ray Bradbury")

   .assert.visible("div:nth-child(2) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(2) > div > div.details > h2 > a", "First Prize Pies")

   .assert.visible("div:nth-child(3) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(3) > div > div.details > h2 > a", "Pride and Prejudice")

   page
   .clickAddToCart()

   browser
   .assert.visible(".content")
   .assert.textContains(".content", "The product has been added to your shopping cart")

   page
   .clickCart()
   
   browser
   .assert.urlContains("https://demo.nopcommerce.com/cart")
   .assert.visible(".cart")

   .assert.visible(".product-name")
   .assert.textContains(".product-name", "Fahrenheit 451 by Ray Bradbury")

   .assert.visible(".product-subtotal")
   .assert.textContains(".product-subtotal", "$27.00")
  },
};
