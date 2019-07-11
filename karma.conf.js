module.exports = function (config) {
  config.set({
    frameworks: ["ui5"],
    ui5: {
      url: "https://openui5.hana.ondemand.com"
    },	    
    browsers: ["ChromeCustomHeadless"],
    singleRun: true,    
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
    // level of browser logging
    browserConsoleLogOptions: {
	level: 'warn'
    },
    preprocessors: {
      '**/webapp/!(test|localService)/**/*.js': ['coverage']
    }, 
    coverageReporter: {
	includeAllSources: true,
	reporters: [
	{
		type: 'html',
		dir: './target/coverage'
	},
	{
		type: 'text'
	}
      ]			
    },
    junitReporter: {
	outputDir: "./target/Junit",
	outputFile: "TEST-qunit.xml",
	suite: "",
	useBrowserName: true
    },
    htmlReporter: {
        outputFile: './target/Html/JUnit.html',
              
        // Optional
        pageTitle: 'Test Results',
        subPageTitle: 'Detailed test results for OPA 5',
        groupSuites: true,
        useCompactStyle: true,
        useLegacyStyle: true,
        showOnlyFailed: false
      },
    reporters : [ 'progress', 'coverage', 'junit', 'html' ]
  });
};
