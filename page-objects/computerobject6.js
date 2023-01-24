module.exports = {
  url: "https://computer-database.gatling.io/computers",
  elements: { 
    addComputerEl: '#add',
    introducedEl: '#introduced',
    discontinuedEl: '#discontinued',
    companyEl: '#company',
    companyOptionEl: 'option[value="11"]',
    saveEl: '.primary',
  },
  commands: {
    clickAdd() {
      return this
      .click("@addComputerEl")
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
