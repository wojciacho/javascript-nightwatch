module.exports = {
    "@tags": ["magento17"],
    addToWishList(browser) {
    const page = browser.page.magentoobject17();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    .execute('scrollTo(0, 1700)')
    
    page
    .clickHoodie()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/hero-hoodie.html")
    .execute('scrollTo(0, 500)')

    page
    .clickAddToWishList()

    browser
    .assert.textEquals(".message-error", "You must login or register to add items to your wishlist.")
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS93aXNobGlzdC9pbmRleC9hZGQv/")

    page
    .typeEmail("warrockpremk@o2.pl")
    .typePassword("WOJTAS12345!")
    .clickSubmit()

    browser
    .assert.textEquals(".message-success", "Hero Hoodie has been added to your Wish List. Click here to continue shopping.")
    .assert.textEquals(".toolbar-number", "1 Item")
  }
}



