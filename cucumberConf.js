const path = require("path");
exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  baseUrl: 'https://www.amazon.co.uk/',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  onPrepare: function() {
    setTimeout(function() {
        browser.driver.executeScript(function() {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            };
        }).then(function(result) {
            browser.driver.manage().window().setSize(result.width, result.height);
            browser.manage().deleteAllCookies();
        });
    });
},


  capabilities: {
    browserName: 'chrome',
  },

  // require feature files
  specs: [
    './features/*.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      './steps/*.js' // accepts a glob
    ],
    format: "json:.tmp/results.json",
    strict: true
  },
  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options:{
        // read the options part
        automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
    }
}]
};