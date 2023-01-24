module.exports = {
  "@tags": ["computer5"],
  Opencart(browser) {
    const page = browser.page.computerobject5();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://computer-database.gatling.io/computers")
    .assert.visible("#searchsubmit")
    .assert.visible("#searchbox")
    .assert.visible("#main > h1")
    .assert.textContains("#main > h1", "574 computers found")

   .assert.visible("tr:nth-child(5) > td:nth-child(1) > a")
   .assert.textContains("tr:nth-child(5) > td:nth-child(1) > a", "ARRA")

   page
   .clickARRA()

   .assert.visible("#main > h1")
   .assert.textContains("#main > h1", "Edit computer")

   .assert.visible("#name")
   .assert.urlContains("https://computer-database.gatling.io/computers/355")

   .assert.visible(".danger")

   page
   .typeName("Wojciacho")
   .typeIntroduced("2000-06-06")
   .typeDiscontinued("2023-06-06")
   .clickCompany()
   .clickSave()

   browser
   .assert.urlContains("https://computer-database.gatling.io/computers")
   .assert.textContains("#main > h1", "574 computers found")
   .assert.visible(".alert-message")
   .assert.textContains(".alert-message", "Done ! Computer Wojciacho has been updated")
  },
};
