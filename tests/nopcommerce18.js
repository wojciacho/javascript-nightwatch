module.exports = {
  "@tags": ["nopcommerce18"],
  Opencart(browser) {
    const page = browser.page.nopobject18();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")
    .assert.visible("div.header-menu > ul.top-menu.notmobile > li:nth-child(2) > a")
    .moveToElement("div.header-menu > ul.top-menu.notmobile > li:nth-child(2) > a", 0, 0)
    .waitForElementVisible("ul.top-menu.notmobile > li:nth-child(2) > ul > li:nth-child(1) > a", 100)

   page
   .clickCamera()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/camera-photo")
   .assert.visible(".page-title > h1")
   .assert.textContains(".page-title > h1", "Camera & photo")

   .assert.visible("div:nth-child(1) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(1) > div > div.details > h2 > a", "Nikon D5500 DSLR")

   .assert.visible("div:nth-child(2) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(2) > div > div.details > h2 > a", "Apple iCam")

   .assert.visible("div:nth-child(3) > div > div.details > h2 > a")
   .assert.textContains("div:nth-child(3) > div > div.details > h2 > a", "Leica T Mirrorless Digital Camera")
   
   page
   .clickCompare()
   
   browser
   .assert.urlContains("https://demo.nopcommerce.com/camera-photo")
   .assert.visible(".content")
   .assert.textContains(".content", "The product has been added to your product comparison")

   page
   .clickComparision()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/compareproducts")

   .assert.visible(".product-name")
   .assert.textContains(".product-name", "Nikon D5500 DSLR")

   page
   .clickComputers()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/computers")

   .assert.visible("div:nth-child(1) > div > h2 > a")
   .assert.textContains("div:nth-child(1) > div > h2 > a", "Desktops")

   .assert.visible("div:nth-child(2) > div > h2 > a")
   .assert.textContains("div:nth-child(2) > div > h2 > a", "Notebooks")

   .assert.visible("div:nth-child(3) > div > h2 > a")
   .assert.textContains("div:nth-child(3) > div > h2 > a", "Software")

   page
   .clickSoftware()

   browser
   .assert.urlContains("https://demo.nopcommerce.com/software")
   .assert.visible(".page-title > h1")
   .assert.textContains(".page-title > h1", "Software")
  },
};
