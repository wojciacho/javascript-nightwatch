module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: {
    cameraEl: {
      selector: '//a[@href="/camera-photo"]',
      locateStrategy: 'xpath',
    },
    compareEl: 'div:nth-child(1) > div > div.details > div.add-info > div.buttons > button.button-2.add-to-compare-list-button',
    comparisionEl: '#bar-notification > div > p > a',
  },
  commands: {
    clickCamera() {
      return this
      .click("@cameraEl")
    },
    clickCompare() {
      return this
      .click("@compareEl")
    },
    clickComparision() {
      return this
      .click("@comparisionEl")
    }
  },
};
