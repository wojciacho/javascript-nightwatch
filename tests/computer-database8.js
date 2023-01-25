module.exports = {
  "@tags": ["computer8"],
  Opencart(browser) {
    const page = browser.page.computerobject8();

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
   .clickASCIComputer()

   browser
   .assert.urlContains("https://computer-database.gatling.io/computers/313")
   .assert.visible(".danger")
   .assert.visible(".primary")

   page
   .clickCompany()
   .clickSave()
  
   page
   .assert.urlContains("https://computer-database.gatling.io/computers")
   .assert.visible(".alert-message")
   .assert.textContains(".alert-message", "Done ! Computer ASCI Blue Pacific has been updated")
  },
};
