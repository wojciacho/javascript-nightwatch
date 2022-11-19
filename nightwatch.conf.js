module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["page-objects"],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path,
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ]
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities : {
        browserName : 'chrome'
      }
    }
  }
};