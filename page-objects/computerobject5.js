module.exports = {
  url: "https://computer-database.gatling.io/computers",
  elements: { 
    arraComputerEl: 'tr:nth-child(5) > td:nth-child(1) > a',
    nameEl: '#name',
    introducedEl: '#introduced',
    discontinuedEl: '#discontinued',
    companyEl: '#company',
    companyOptionEl: 'option[value="17"]',
    saveEl: '.primary',
  },
  commands: {
    clickARRA() {
      return this
      .click("@arraComputerEl")
    },
    typeName(value) {
      return this
      .clearValue("@nameEl")
      .setValue("@nameEl", value)
    },
    typeIntroduced(value) {
      return this
      .clearValue("@introducedEl")
      .setValue("@introducedEl", value)
    },
    typeDiscontinued(value) {
      return this
      .clearValue("@discontinuedEl")
      .setValue("@discontinuedEl", value)
    },
    clickCompany() {
      return this
      .click("@companyEl")
      .click("@companyOptionEl")
    },
    clickSave() {
      return this
      .click("@saveEl")
    }
  },
};
