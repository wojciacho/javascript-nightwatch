module.exports = {
  url: "https://computer-database.gatling.io/computers",
  elements: { 
    addButton: '#add',
    nameEl: '#name',
    introducedEl: '#introduced',
    discontinuedEl: '#discontinued',
    companyEl: '#company',
    companyOptionEl: 'option[value="1"]',
    createComputerBtn: '.primary'
  },
  commands: {
    clickAdd() {
      return this
      .click("@addButton")
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
    clickCreate() {
      return this
      .click("@createComputerBtn")
    }
  },
};
