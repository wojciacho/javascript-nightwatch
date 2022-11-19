module.exports = {
  "@tags": ["healthcare"],
  Healthcare(browser) {
    const page = browser.page.healthcareobject();
    const invalidID = "admin";
    const invalidPassword = "admin";
    const userID = "John Doe";
    const userPassword = "ThisIsNotAPassword";
    const date = "06/06/2000";
    const comment = "Pozdrawiam serdecznie";

    page
      .navigate()
      .signIn()
      .setInvalidUserID(invalidID)
      .setInvalidUserPassword(invalidPassword)
      .btnLogin()
      .clearLoginInput()
      .setUserID(userID)
      .setUserPassword(userPassword)
      .btnLogin()
      .selectOption()
      .clickCheckbox()
      .pause(1000)
      .selectProgram("@checkbox2", "Medicaid")
      .setDate(date)
      .pause(1000)
      .setComment(comment)
      .pause(1000)
      .sendAppointment()
      .pause(1000)
      .return()
      .pause(1000);

    browser.assert.not
      .selected("#chk_hospotal_readmission")
      .assert.titleContains("CURA Healthcare Service")
      .assert.textContains("#combo_facility", "Tokyo CURA Healthcare Center")
      .assert.urlContains("https://katalon-demo-cura.herokuapp.com");
  },
};
