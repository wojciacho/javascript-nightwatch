module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    laptopsEl: '#narbar-menu > ul > li:nth-child(2) > div > a',
    laptopHP: 'div:nth-child(1) > form > div > div.content > div.button-group > button:nth-child(3)'
  },
  commands: {
    clickAllLaptops() {
      return this
      .click("@laptopsEl")
    },
    clickCompareHP() {
      return this
      .click("@laptopHP")
    }
  },
};
