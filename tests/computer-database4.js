module.exports = {
  "@tags": ["computer4"],
  Opencart(browser) {
    const page = browser.page.computerobject4();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://computer-database.gatling.io/computers")
    .assert.visible("#searchsubmit")
    .assert.visible("#searchbox")
    .assert.visible("#main > h1")
    .assert.textContains("#main > h1", "574 computers found")

   .assert.visible("tr:nth-child(1) > td:nth-child(1) > a")
   .assert.textContains("tr:nth-child(1) > td:nth-child(1) > a", "ACE")

   page
   .clickACE()

   .assert.visible("#main > h1")
   .assert.textContains("#main > h1", "Edit computer")

   .assert.visible("#name")
   .assert.urlContains("https://computer-database.gatling.io/computers/381")

   .assert.visible(".danger")

   page
   .clickDeleteButton()

   browser
   .assert.urlContains("https://computer-database.gatling.io/computers")
   .assert.textContains("#main > h1", "574 computers found")
   .assert.visible(".alert-message")
   .assert.textContains(".alert-message", "Done ! Computer ACE has been deleted")
  },
};
