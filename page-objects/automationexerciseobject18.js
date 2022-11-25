module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      loginEl: {
        selector: '//a[@href="/login"]',
        locateStrategy: "xpath",
      },
      emailEl: 'form[action="/login"] > input[type="email"]',
      passwordEl: 'form[action="/login"] > input[type="password"]',
      continueBtnEl: ".pull-right >.btn-primary",
      addToCartFirstEl: 'a[data-product-id="1"]',
      viewCartEl: {
        selector: '//a[@href="/view_cart"]',
        locateStrategy: "xpath"
      },
      btnSuccess: ".modal-footer > .btn-success",
      checkoutEl: '.col-sm-6 > .btn-default',
      btnLoginEl: 'form[action="/login"] > .btn-default',
      commentEl: ".form-control",
      placeOrderEl: {
        selector: '//a[@href="/payment"]',
        locateStrategy: "xpath"
      },
      nameCardEl: 'input[name="name_on_card"]',
      cardNumberEl: 'input[name="card_number"]',
      cvcEl: 'input[name="cvc"]',
      expirationEl: 'input[name="expiry_month"]',
      expirationYearEl: 'input[name="expiry_year"]',
      confirmOrderEl: '.submit-button',

    },
    commands: {
      clickLogin() {
        return this
        .click("@loginEl");
      },
      typeEmail(value) {
        return this
        .clearValue("@emailEl")
        .setValue("@emailEl", value)
      },
      typePassword(value) {
        return this
        .clearValue("@passwordEl")
        .setValue("@passwordEl", value)
      },
      clickLoginToAccount() {
        return this
        .click("@btnLoginEl")
      },
      clickContinue() {
        return this
        .click("@continueBtnEl")
      },
      clickAddToCart() {
        return this
        .click("@addToCartFirstEl")
      },
      clickCart() {
        return this
        .click("@viewCartEl")
      },
      clickButtonOk() {
        return this
        .click("@btnSuccess")
      },
      clickCheckout() {
        return this
        .click("@checkoutEl")
      }, 
      typeComment(value) {
        return this
        .clearValue("@commentEl")
        .setValue("@commentEl", value)
      },
      clickPlaceOrder() {
        return this
        .click("@placeOrderEl")
      },
      typeCardName(value) {
        return this
        .clearValue("@nameCardEl")
        .setValue("@nameCardEl", value)
      },
      typeCardNumber(value) {
        return this
        .clearValue("@cardNumberEl")
        .setValue("@cardNumberEl", value)
      },
      typeCvc(value) {
        return this
        .clearValue('@cvcEl')
        .setValue("@cvcEl", value)
      },
      typeExpirationM(value) {
        return this
        .clearValue("@expirationEl")
        .setValue("@expirationEl", value)
      },
      typeExpirationY(value) {
        return this
        .clearValue("@expirationYearEl")
        .setValue("@expirationYearEl", value)
      },
      clickConfirmOrder() {
        return this
        .click("@confirmOrderEl")
      }
    },
  };
  