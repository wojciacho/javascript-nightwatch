module.exports = {
  "@tags": ["computer"],
  Opencart(browser) {
    const page = browser.page.computerobject();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://computer-database.gatling.io/computers")
    .assert.visible("#add")

    page
    .clickAdd()

    browser
    .assert.urlContains("https://computer-database.gatling.io/computers/new")
    .assert.visible("#main > h1")
    .assert.textContains("#main > h1", "Add a computer")

    page
    .typeName("Wojciacho")
    .typeIntroduced("2022-06-06")
    .typeDiscontinued("2024-06-06")
    .clickCompany()
    .clickCreate()

    browser
    .assert.urlContains("https://computer-database.gatling.io/computers")
    .assert.visible(".alert-message")
    .assert.textContains(".alert-message", "Done ! Computer Wojciacho has been created")
  },
};
