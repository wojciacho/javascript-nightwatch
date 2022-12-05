module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
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
    },
  };
  