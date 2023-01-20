module.exports = {
  "@tags": ["computer2"],
  Opencart(browser) {
    const page = browser.page.computerobject2();

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

    .assert.visible("tr:nth-child(2) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(2) > td:nth-child(1) > a", "Apple II")

    .assert.visible("tr:nth-child(3) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(3) > td:nth-child(1) > a", "Apple II Plus")

    .assert.visible("tr:nth-child(4) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(4) > td:nth-child(1) > a", "Apple IIGS")

    .assert.visible("tr:nth-child(5) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(5) > td:nth-child(1) > a", "Apple III")

    .assert.visible("tr:nth-child(6) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(6) > td:nth-child(1) > a", "Apple III Plus")

    .assert.visible("tr:nth-child(7) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(7) > td:nth-child(1) > a", "Apple IIc")

    .assert.visible("tr:nth-child(8) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(8) > td:nth-child(1) > a", "Apple IIc Plus")

    .assert.visible("tr:nth-child(9) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(9) > td:nth-child(1) > a", "Apple IIe")

    .assert.visible("tr:nth-child(10) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(10) > td:nth-child(1) > a", "Apple Lisa")

    page
    .clickNext()

    browser
    .assert.urlContains("https://computer-database.gatling.io/computers?p=1&n=10&s=name&d=asc&f=apple")
    .assert.visible("#main > h1")
    .assert.textContains("#main > h1", "13 computers found")

    .assert.visible("tr:nth-child(1) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(1) > td:nth-child(1) > a", "Apple Network Server")

    .assert.visible("tr:nth-child(2) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(2) > td:nth-child(1) > a", "Apple Newton")

    .assert.visible("tr:nth-child(3) > td:nth-child(1) > a")
    .assert.textContains("tr:nth-child(3) > td:nth-child(1) > a", "Apple PenLite")
  },
};
