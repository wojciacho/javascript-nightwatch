module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      saleEl: {
        selector: '//a[@href="https://magento.softwaretestingboard.com/sale.html"]',
        locateStrategy: "xpath",
      },
      newsletterEl: '#newsletter',
      subscribeBtnEl: '.actions> .subscribe'
    },
    commands: {
      typeNewsletter(value) {
        return this
        .clearValue("@newsletterEl")
        .setValue("@newsletterEl", value)
      },
      clickSubscribe() {
        return this
        .click("@subscribeBtnEl")
      },
      clickSale() {
        return this
        .click("@saleEl")
      }
    },
  };
  