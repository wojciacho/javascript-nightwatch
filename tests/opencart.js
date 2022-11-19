module.exports = {
  "@tags": ["opencart"],
  Opencart(browser) {
    const page = browser.page.opencartobject1();

    page
      .navigate()
      .clickTablets()
      .wishListButton()
      .clickAddToCart()
      .clickPhones()
      .clickCompare()
      .home();

    browser.assert.urlContains(
      "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
      "URL is correct"
    );
    browser.waitForElementVisible("#alert", "Alert is visible");
    browser.assert.visible('[name="search"]', "Searchbar is visible");
  },
};
