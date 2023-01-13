module.exports = {
  url: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
  elements: {
    iphoneEl: {
      selector: '//a[@href="https://demo.opencart.com/index.php?route=product/product&language=en-gb&product_id=40"]',
      locateStrategy: 'xpath',
    },
      reviewsEl: '#review-tab',
      nameEl: '.mb-3 > #input-name',
      myReviewEl: '.mb-3 > #input-text',
      // ratingEl: '#input-rating > .form-check-input',
      ratingOptionEl: 'input[value="4"]',
      continueBtn: '.float-end > .btn-primary'
    },
  commands: {
    clickPhone() {
      return this
      .click("@iphoneEl")
    },
    clickReviews() {
      return this
      .click("@reviewsEl")
    },
    typeName(value) {
      return this
      .clearValue("@nameEl")
      .setValue("@nameEl", value)
    },
    typeReview(value) {
      return this
      .clearValue("@myReviewEl")
      .setValue("@myReviewEl", value)
    },
    clickRating() {
      return this
      .click("@ratingOptionEl")
    },
    clickContinue() {
      return this
      .click("@continueBtn")
    },
  },
};
