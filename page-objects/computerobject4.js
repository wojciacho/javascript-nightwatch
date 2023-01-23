module.exports = {
  url: "https://computer-database.gatling.io/computers",
  elements: { 
    aceComputerEl: 'tr:nth-child(1) > td:nth-child(1) > a',
    deleteEl: '.danger'
  },
  commands: {
    clickACE() {
      return this
      .click("@aceComputerEl")
    },
    clickDeleteButton() {
      return this
      .click("@deleteEl")
    },
  },
};
