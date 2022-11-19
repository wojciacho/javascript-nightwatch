module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    tablets: {
      selector:
        "//a[@href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=57']",
      locateStrategy: "xpath",
    },
    wishListButton: '[data-bs-original-title="Add to Wish List"]',
    addToCart: '[data-bs-original-title="Add to Cart"]',
    laptops1: {
      selector:
        "//a[@href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=18']",
      locateStrategy: "xpath",
    },
    phones: {
      selector:
        "//a[@href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=24']",
      locateStrategy: "xpath",
    },
    tel: '[data-bs-original-title="Compare this Product"]',
    home: "#logo",
  },
  commands: {
    clickTablets() {
      return this.click("@tablets");
    },
    wishListButton() {
      return this.click("@wishListButton");
    },
    clickAddToCart() {
      return this.click("@addToCart");
    },
    clickPhones() {
      return this.click("@phones");
    },
    clickCompare() {
      return this.click("@tel");
    },
    home() {
      return this.click("@home");
    },
  },
};
