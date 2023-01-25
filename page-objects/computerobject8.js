module.exports = {
  url: "https://computer-database.gatling.io/computers",
  elements: { 
    asciEl: 'tr:nth-child(7) > td:nth-child(1) > a',
    saveEl: '.primary',
    companyEl: '#company',
    companyOptionEl: 'option[class="blank"]'
  },
  commands: {
    clickASCIComputer() {
      return this
      .click("@asciEl")
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
