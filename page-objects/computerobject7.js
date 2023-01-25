module.exports = {
  url: "https://computer-database.gatling.io/computers",
  elements: { 
    nextPageEl: '#pagination > ul > li.next > a',
    asciEl: 'tr:nth-child(1) > td:nth-child(1) > a',
    discontinuedEl: '#discontinued',
    saveEl: '.primary',
  },
  commands: {
    clickNextPage() {
      return this
      .click("@nextPageEl")
    },
    clickASCIComputer() {
      return this
      .click("@asciEl")
    },
    typeDiscontinued(value) {
      return this
      .clearValue("@discontinuedEl")
      .setValue("@discontinuedEl", value)
    },
    clickSave() {
      return this
      .click("@saveEl")
    }
  },
};
