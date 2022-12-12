module.exports = {
    "@tags": ["magento14"],
    regiterUserWithExistingEmail(browser) {
    const page = browser.page.magentoobject14();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    
    page
    .createAccount()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/create/")

    page
    .typeFirstName("Wojciech")
    .typeLastName("Wojciechowski")
    .typeEmail("warrockpremk@o2.pl")
    .typePassword("WOJTAS12345!")
    .clickCreate()

    browser
    .assert.textEquals(".message-error", "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.")
  }
}



