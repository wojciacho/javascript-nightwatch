module.exports = {
    "@tags": ["magento20"],
    checkWishlist(browser) {
    const page = browser.page.magentoobject20();
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")

    page
    .clickSignIn()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")

    page
    .typeEmail("warrockpremk@o2.pl")
    .typePassword("WOJTAS12345!")
    .clickSubmit()
    
    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")

    page
    .clickCustomer()
    .clickMyAccount()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/customer/account/")

    page
    .clickMyWishlist()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/wishlist/")
    .assert.textEquals(".form-wishlist-items > .empty", "You have no items in your wish list.")

    page
    .clickHome()
    
    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")
    .execute('scrollTo(0, 1700)')

    page
    .clickHoodie()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/hero-hoodie.html")
    .execute('scrollTo(0, 450)')
    
    page
    .clickAddToWishlist()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/wishlist/index/index/wishlist_id/22304/")
    .assert.textEquals(".message-success", "Hero Hoodie has been added to your Wish List. Click here to continue shopping.")
    .assert.visible(".product-items")

    page
    .clickDeleteFromWishlist()

    browser
    .assert.textEquals(".message-success", "Hero Hoodie has been removed from your Wish List.")
    .assert.textEquals(".form-wishlist-items > .empty", "You have no items in your wish list.")
  }
}



