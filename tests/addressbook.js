module.exports = {
  "@tags": ["addresbook"],
  Addressbook(browser) {
    const page = browser.page.addressbookobject1();
    const email = "123@123.com";
    const password = "123";
    const name = "Wojciech";
    const lastName = "Wojciech";
    const address = "Sloneczna 13";
    const city = "Chicago";
    const code = 12345;
    const age = 22;
    const url = "https://www.google.com";
    const number = 123456789;
    const note = "Witam";

    page
      .navigate()
      .clickSignIn()
      .pause(1000)
      .setEmail(email)
      .keysPassword(password)
      .clickLogIn()
      .clickAddress()
      .pause(1000)
      .clickCreateAddress();

    browser.assert
      .urlContains("http://a.testaddressbook.com/addresses/new")
      .assert.titleContains("Address Book");

    page
      .setFirstName(name)
      .setLastName(lastName)
      .typeAddress(address)
      .typeCity(city)
      .clickState()
      .typeCode(code)
      .setCountry()
      .setAge(age)
      .setWebPage(url)
      .setNumber(number)
      .clickHobby()
      .typeNote(note)
      .clickSend();

    browser.assert
      .selected("#address_interest_dance")
      .assert.urlContains("http://a.testaddressbook.com/addresses");
  },
};
