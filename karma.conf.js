module.exports = function (config) {
  config.set({
    frameworks: ["ui5","qunit"],
    ui5: {
      url: "https://openui5.hana.ondemand.com",
      mode: "script",     
      config: {
        theme: 'sap_belize',
        language: 'EN',
        animation: false,
        compatVersion: 'edge',
        async: true,
        resourceRoots: {
          "sap.ui.demo.cart": "./base/webapp",
          "sap.ui.demo.mock": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/"
        }
      },     
      tests: [      
        "sap/ui/demo/cart/test/integration/AllJourneys"
      ]
    },
    client: {			
			qunit: {
				showUI: true
			}
    },
    browsers: ["ChromeCustom"],
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
					dir: './coverage/'
				},
				{
					type: 'text'
				}
      ]			
		},
    reporters : [ 'progress', 'coverage' ]
  });
};