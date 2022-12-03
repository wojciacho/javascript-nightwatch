module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      inputEl: '.control > #search',
      searchEl: '.actions > .search'
    },
    commands: {
      searchElement(value) {
        return this
        .clearValue("@inputEl")
        .setValue("@inputEl", value)
      },
      clickSearch() {
        return this
        .click("@searchEl")
      },
    },
  };
  