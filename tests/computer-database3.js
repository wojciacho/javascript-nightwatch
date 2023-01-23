module.exports = {
  "@tags": ["computer3"],
  Opencart(browser) {
    const page = browser.page.computerobject3();

    page
    .navigate()
      
    browser
    .assert.urlContains("https://computer-database.gatling.io/computers")
    .assert.visible("#searchsubmit")
    .assert.visible("#searchbox")
    .assert.visible("#main > h1")
    .assert.textContains("#main > h1", "574 computers found")

    page
    .typeComputerName("apple")
    .clickFilter()

    browser
    .assert.urlContains("https://computer-database.gatling.io/computers?f=apple")
    .assert.visible("#main > h1")
    .assert.textContains("#main > h1", "13 computers found")

    .assert.visible("tr:nth-child(1) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(1) > td:nth-child(1) > a", "Apple I")
    .assert.visible("tr:nth-child(1) > td:nth-child(2)")
    .assert.textContains("tr:nth-child(1) > td:nth-child(2)", "01 Apr 1976")
    .assert.textContains(" tr:nth-child(1) > td:nth-child(3)", "01 Oct 1977")

    .assert.visible("tr:nth-child(2) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(2) > td:nth-child(1) > a", "Apple II")
    .assert.textContains(" tr:nth-child(2) > td:nth-child(2)", "01 Apr 1977")
    .assert.textContains(" tr:nth-child(2) > td:nth-child(3)", "01 Oct 1993")

    page
    .clickNext()

    browser
    .assert.urlContains("https://computer-database.gatling.io/computers?p=1&n=10&s=name&d=asc&f=apple")
    .assert.visible("#main > h1")
    .assert.textContains("#main > h1", "13 computers found")

    .assert.visible("tr:nth-child(2) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(2) > td:nth-child(1) > a", "Apple Newton")
    .assert.textContains("tr:nth-child(2) > td:nth-child(2)", "01 Jan 1993")
    .assert.textContains("tr:nth-child(2) > td:nth-child(3)", "01 Jan 1998")
  },
};
