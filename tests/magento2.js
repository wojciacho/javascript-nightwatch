module.exports = {
    "@tags": ["magento2"],
    checkJacketsPage(browser) {
      const page = browser.page.magentoobject2();
    
      page
      .navigate()

      browser
      .assert.urlContains("https://magento.softwaretestingboard.com/")
      .assert.textEquals(".message > .content", "This is a demo store. No orders will be fulfilled.")

     page
     .clickMenCategory()

     browser
     .execute('scrollTo(0, 1300')
     .assert.urlContains("https://magento.softwaretestingboard.com/men.html")
     .assert.visible(".sidebar-main")
     .assert.textEquals("#old-price-158-widget-product-grid", "$54.00")

     page
     .clickLogo()
     
     browser
     .assert.urlContains("https://magento.softwaretestingboard.com")
    },
  };
  