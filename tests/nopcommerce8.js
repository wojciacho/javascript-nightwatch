module.exports = {
  "@tags": ["nopcommerce8"],
  Opencart(browser) {
    const page = browser.page.nopobject8();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://demo.nopcommerce.com")

    .assert.visible("ul.top-menu.notmobile > li:nth-child(1) > a")
    .assert.textContains("ul.top-menu.notmobile > li:nth-child(1) > a", "Computers")

    .assert.visible("ul.top-menu.notmobile > li:nth-child(2) > a")
    .assert.textContains("ul.top-menu.notmobile > li:nth-child(2) > a", "Electronics")

    .assert.visible("ul.top-menu.notmobile > li:nth-child(3) > a")
    .assert.textContains("ul.top-menu.notmobile > li:nth-child(3) > a", "Apparel")

    .assert.visible("ul.top-menu.notmobile > li:nth-child(4) > a")
    .assert.textContains("ul.top-menu.notmobile > li:nth-child(4) > a", "Digital downloads")

    .assert.visible("ul.top-menu.notmobile > li:nth-child(5) > a")
    .assert.textContains("ul.top-menu.notmobile > li:nth-child(5) > a", "Books")

    .assert.visible("ul.top-menu.notmobile > li:nth-child(6) > a")
    .assert.textContains("ul.top-menu.notmobile > li:nth-child(6) > a", "Jewelry")

    .assert.visible("ul.top-menu.notmobile > li:nth-child(7) > a")
    .assert.textContains("ul.top-menu.notmobile > li:nth-child(7) > a", "Gift Cards")
  },
};
