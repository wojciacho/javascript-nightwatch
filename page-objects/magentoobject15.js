module.exports = {
    url: 'https://magento.softwaretestingboard.com',
    elements: {
      hoodieEl: 'a[title="Hero Hoodie"]',
      reviewsTabEl: '#tab-label-reviews-title',
      ratingEl: 'label[title="1 star"]',
      nicknameEl: '#nickname_field',
      summaryEl: '#summary_field',
      reviewEl: '#review_field',
      submitReviewEl: '.submit'
    },
    commands: {
    clickHoodie() {
      return this
      .click("@hoodieEl")
    },
    clickReviews() {
      return this
      .click("@reviewsTabEl")
    },
    clickRating() {
      return this
      .click("@ratingEl")
    },
    typeNickName(value) {
      return this
      .clearValue("@nicknameEl")
      .setValue("@nicknameEl", value)
    },
    typeSummary(value) {
      return this
      .clearValue("@summaryEl")
      .setValue("@summaryEl", value)
    },
    typeReview(value) {
      return this
      .clearValue("@reviewEl")
      .setValue("@reviewEl", value)
    },
    clickSubmit() {
      return this
      .click("@submitReviewEl")
    }
  }
}
  