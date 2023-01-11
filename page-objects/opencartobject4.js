module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    currencyEl: '#form-currency',
    euroEl: '#form-currency > div > ul > li:nth-child(1) > a',
    allDesktopsEl: '#narbar-menu > ul > li:nth-child(1) > div > a',
  },
  commands: {
    clickCurrency() {
      return this
      .click("@currencyEl")
    },
    clickEuro() {
      return this
      .click("@euroEl")
    },
    clickDesktops() {
      return this
      .click("@allDesktopsEl")
    },
  },
};
