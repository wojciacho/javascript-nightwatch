module.exports = {
  "@tags": ["computer6"],
  Opencart(browser) {
    const page = browser.page.computerobject6();

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
   .clickAdd()

   .assert.visible("#main > h1")
   .assert.textContains("#main > h1", "Add a computer")

   .assert.visible("#name")
   .assert.urlContains("https://computer-database.gatling.io/computers/new")

   page
   .typeIntroduced("2000-06-06")
   .typeDiscontinued("2023-06-06")
   .clickCompany()
   .clickSave()

   browser
   .assert.urlContains("https://computer-database.gatling.io/computers")
   .assert.hasClass(".clearfix", "error")
   .assert.visible(" fieldset > div.clearfix.error > div > span")
   .assert.textContains(" fieldset > div.clearfix.error > div > span", "Failed to refine type : Predicate isEmpty() did not fail.")
  },
};
