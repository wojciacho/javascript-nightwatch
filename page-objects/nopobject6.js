module.exports = {
  url: "https://demo.nopcommerce.com",
  elements: { 
    pollEl: '#pollanswers-2',
    voteEl: '#vote-poll-1'
  },
  commands: {
    clickPollAnswer() {
      return this
      .click("@pollEl")
    },
    clickVote() {
      return this
      .click("@voteEl")
    }
  },
};
