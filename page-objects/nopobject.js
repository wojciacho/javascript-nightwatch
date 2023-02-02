module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: { 
    currencyEl: '#customerCurrency',
    currencyOption: '#customerCurrency > option[value="https://demo.nopcommerce.com/changecurrency/6?returnUrl=%2F"]'
  },
  commands: {
    clickCurrency() {
      return this
      .click("@currencyEl")
      .click("@currencyOption")
    }
  },
};
