module.exports = {
  "@tags": ["itera"],
  Itera(browser) {
    const page = browser.page.iteraobject();
    const name = "Wojciech";
    const mobileNumber = 123456;
    const emailAddress = "wojciacho@example.com";
    const password = "WOJCIACHO";
    const address = "Chicago, Sloneczna 13";

    page
      .navigate()
      .setName(name)
      .setPhoneNumber(mobileNumber)
      .setEmail(emailAddress)
      .userPassword(password)
      .setAddress(address)
      .submit()
      .gender()
      .days()
      .country()
      .experience()
      .framework();
  },
};
