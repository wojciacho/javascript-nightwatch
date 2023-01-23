module.exports = {
  url: "https://computer-database.gatling.io/computers",
  elements: { 
    searchboxEl: '#searchbox',
    filterButton: '#searchsubmit',
    nextButton: {
      selector: '//a[@href="/computers?p=1&n=10&s=name&d=asc&f=apple"]',
      locateStrategy: 'xpath',
    },
  },
  commands: {
    clickFilter() {
      return this
      .click("@filterButton")
    },
    typeComputerName(value) {
      return this
      .clearValue("@searchboxEl")
      .setValue("@searchboxEl", value)
    },
    clickNext() {
      return this
      .click("@nextButton")
    }
  },
};
