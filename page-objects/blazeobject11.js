module.exports = {
  url: "https://www.demoblaze.com/",
  elements: { 
    contactEl: '#navbarExample > ul > li:nth-child(2) > a',
    emailEl: '#recipient-email',
    nameEl: '#recipient-name',
    messageEl: '#message-text',
    sendButton: '#exampleModal > div > div > div.modal-footer > button.btn.btn-primary'
  },
  commands: {
    clickContact() {
      return this
      .click("@contactEl")
    },
    typeEmail(value) {
      return this
      .clearValue("@emailEl")
      .setValue("@emailEl", value)
    },
    typeName(value) {
      return this
      .clearValue("@nameEl")
      .setValue("@nameEl", value)
    },
    typeMessage(value) {
      return this
      .clearValue("@messageEl")
      .setValue("@messageEl", value)
    },
    clickSend() {
      return this
      .click("@sendButton")
    }
  },
};
