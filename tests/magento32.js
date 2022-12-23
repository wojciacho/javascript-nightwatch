module.exports = {
  "@tags": ["magento32"],
  checkReview(browser) {
  const page = browser.page.magentoobject32();
  
  page
  .navigate()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com")

  page
  .clickMen()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men.html")
  
  page
  .clickTops()

  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/men/tops-men.html")
  .assert.visible(".filter-content")
  .execute('scrollTo(0, 1300)')  

  page
  .clickReviews()
 
  browser
  .assert.urlContains("https://magento.softwaretestingboard.com/helios-endurance-tank.html#reviews")
  .pause(1500)
  .assert.textContains("#tab-label-reviews > .switch > .counter", "4")
  .assert.visible(".review-list > .block-title")
  .assert.textContains("li:nth-child(1) > div.review-content", "I sweat a LOT when I run")
  .assert.textContains("li:nth-child(2) > div.review-content", "wish it was longer")
  .execute('scrollTo(0, 1450)')
  .assert.textContains("li:nth-child(3) > div.review-title", "Razorback version?")
  .assert.textContains("li:nth-child(4) > div.review-title", "Fits true to size, feels great.")
}
}



