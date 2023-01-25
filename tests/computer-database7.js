module.exports = {
  "@tags": ["computer7"],
  Opencart(browser) {
    const page = browser.page.computerobject7();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://computer-database.gatling.io/computers")
    .assert.visible("#searchsubmit")
    .assert.visible("#searchbox")
    .assert.visible("#main > h1")
    .assert.textContains("#main > h1", "574 computers found")

   .assert.visible("#pagination > ul > li.next > a")

   page
   .clickNextPage()

   .assert.urlContains("https://computer-database.gatling.io/computers?p=1&n=10&s=name&d=asc")
   .assert.visible("#main > h1")
   .assert.textContains("#main > h1", "574 computers found")
   .assert.visible(".current > a")
   .assert.textContains(".current > a", "Displaying 11 to 20 of 574")

   page
   .clickASCIComputer()

   browser
   .assert.urlContains("https://computer-database.gatling.io/computers/311")
   .assert.visible(".danger")
   .assert.visible(".primary")

   page
   .typeDiscontinued("2023-06-06")
   .clickSave()
  
   page
   .assert.urlContains("https://computer-database.gatling.io/computers")
   .assert.visible(".alert-message")
   .assert.textContains(".alert-message", "Done ! Computer ASCI White has been updated")
  },
};
