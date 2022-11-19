module.exports = {
  url: "https://katalon-demo-cura.herokuapp.com",
  elements: {
    appointment: "#btn-make-appointment",
    mainQueryInput: 'input[name="username"]',
    passwordQuery: 'input[name="password"]',
    btnLogin: "#btn-login",
    checkboxReadMission: "#chk_hospotal_readmission",
    checkbox2: '[name="programs"]',
    date: "#txt_visit_date",
    comment: "#txt_comment",
    send: "#btn-book-appointment",
    return: ".btn.btn-default",
    select: "#combo_facility",
    option: 'option[value="Hongkong CURA Healthcare Center"]',
  },
  commands: [
    {
      signIn() {
        return this.click("@appointment");
      },
      setInvalidUserID(value) {
        return this.setValue("@mainQueryInput", value);
      },
      setInvalidUserPassword(value) {
        return this.setValue("@passwordQuery", value);
      },
      setUserID(value) {
        return this.setValue("@mainQueryInput", value);
      },
      setUserPassword(value) {
        return this.setValue("@passwordQuery", value);
      },
      clearLoginInput() {
        return this.clearValue("@mainQueryInput").clearValue("@passwordQuery");
      },
      btnLogin() {
        return this.click("@btnLogin");
      },
      clickCheckbox() {
        return this.click("@checkboxReadMission");
      },
      selectProgram(selector, value) {
        return this.click(selector).click(
          `[name="programs"][value="${value}"]`
        );
      },
      selectOption() {
        return this.click("@select").click("@option");
      },
      setDate(value) {
        return this.setValue("@date", value);
      },
      setComment(value) {
        return this.setValue("@comment", value);
      },
      sendAppointment() {
        return this.click("@send");
      },
      return() {
        return this.click("@return");
      },
    },
  ],
};
