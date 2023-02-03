module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: { 
    computerEl: {
      selector: '/html/body/div[6]/div[2]/ul[1]/li[1]/a',
      locateStrategy: 'xpath',
    },
    desktopsEl: 'div.listbox > ul > li.active.last > ul > li:nth-child(1) > a',
    wishlistEl: 'div:nth-child(2) > div > div.details > div.add-info > div.buttons > button.button-2.add-to-wishlist-button',
    wishlist: {
      selector: '//a[@href="/wishlist"]',
      locateStrategy: 'xpath',
    }
  },
  commands: {
    clickComputer() {
      return this
      .click("@computerEl")
    },
    clickDesktops() {
      return this
      .click("@desktopsEl")
    },
    clickAddToWishListVanquish() {
      return this
      .click("@wishlistEl")
    },
    clickWishlist() {
      return this
      .click("@wishlist")
    }
  },
};
