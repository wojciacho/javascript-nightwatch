module.exports = {
    url: 'http://automationexercise.com',
    elements: {
      testCasesEl: {
        selector: '//a[@href="/test_cases"]',
        locateStrategy: "xpath"
      },
      
    },
    commands: {
      clickTestCases() {
        return this
        .click("@testCasesEl");
      },
  }
}
  