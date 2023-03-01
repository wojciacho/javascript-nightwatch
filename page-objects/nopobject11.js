module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: {
   giftEl: {
      selector: '//a[@href="/gift-cards"]',
      locateStrategy: 'xpath',
    },
    selectEl: '#products-orderby',
    selectOptionEl: 'option[value="11"]',
  },
  commands: {
    clickGift() {
      return this
      .click("@giftEl")
    },
    clickSelect() {
      return this
      .click("@selectEl")
      .click("@selectOptionEl")
    } 
  },
};
