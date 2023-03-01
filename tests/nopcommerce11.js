module.exports = {
  "@tags": ["nopcommerce11"],
  Opencart(browser) {
    const page = browser.page.nopobject11();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.visible("ul.top-menu.notmobile > li:nth-child(7) > a")
    .assert.textContains("ul.top-menu.notmobile > li:nth-child(7) > a", "Gift Cards")

   page
   .clickGift()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/gift-cards")
   .assert.visible(".page-title > h1")
   .assert.textContains(".page-title > h1", "Gift Cards")

   .assert.visible("div:nth-child(1) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(1) > div > div.details > h2 > a", "$25 Virtual Gift Card")

   .assert.visible("div:nth-child(2) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(2) > div > div.details > h2 > a", "$50 Physical Gift Card")

   .assert.visible("div:nth-child(3) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(3) > div > div.details > h2 > a", "$100 Physical Gift Card")

   page
   .clickSelect()
   
   browser
   .assert.visible("div:nth-child(1) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(1) > div > div.details > h2 > a", "$100 Physical Gift Card")

   .assert.visible("div:nth-child(2) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(2) > div > div.details > h2 > a", "$50 Physical Gift Card")

   .assert.visible("div:nth-child(3) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(3) > div > div.details > h2 > a", "$25 Virtual Gift Card")
  },
};
