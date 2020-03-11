module.exports = function (config) {
  config.set({
    frameworks: ["ui5"],
    ui5: {
      url: "https://sapui5.hana.ondemand.com",
      mode: "html",
      testpage: "webapp/test/testsuite.qunit.html"
    },
    browsers: ["ChromeHeadless"],   
    customLaunchers: {
      ChromeCustom: {
        base: 'Chrome',
        flags: ['--start-maximized']
      },
      ChromeCustomHeadless: {
        base: 'ChromeHeadless',
        flags: ['--window-size=1600,900']
      }
    },  
    singleRun: false,
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 60000,
    autoWatch: true,
    browserConsoleLogOptions: {
      level: 'warn'
    },
    logLevel: config.LOG_WARN,

    preprocessors: {
      '**/webapp/!(resources|maven|test-resources|test|localService|localService2)/**/*.js': ['coverage']
    }
  });
};
