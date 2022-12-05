module.exports = {
    "@tags": ["magento5"],
    verifyNewsletterInSalePage(browser) {
    const page = browser.page.magentoobject5();
    const email = makeEmail()
    
    page
    .navigate()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com")

    page
    .clickSale()

    browser
    .assert.urlContains("https://magento.softwaretestingboard.com/sale.html")
    .execute('scrollTo(0, 1200')
    .pause(1000)
    .assert.visible(".page-footer")
    .assert.textEquals(".copyright", "Copyright © 2013-present Magento, Inc. All rights reserved.")

    page
    .clickSubscribe()

    browser
    .assert.visible("#newsletter-error")

    page
    .typeNewsletter(email)
    .clickSubscribe()
    
    browser
    .assert.visible(".message-success")
    .assert.textEquals(".message-success", "Thank you for your subscription.")
    .assert.urlContains("https://magento.softwaretestingboard.com")
  }
}

function makeEmail() {
  let strValues = "abcdefg12345"   
  let strEmail = ""
  let strTmp;
  for(let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()))
    strEmail = strEmail + strTmp
  }
  strTmp = ""
  strEmail = strEmail + "@"
  for(let j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()))
    strEmail = strEmail + strTmp
  }
  strEmail = strEmail + ".com"
  return strEmail
}