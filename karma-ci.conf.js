//Load the base configuration
var baseConfig = require("./karma.conf.js");

module.exports = function (config) {
  // Load base config
  baseConfig(config);
  // Override base config
  config.set({
    browsers: ["RemoteChrome"],
    customLaunchers: {
      "RemoteChrome": {
        base: "WebDriver",
        config: {
          hostname: "localhost",
          port: 4444
        },
        browserName: "chrome",
        name: "Karma",
        pseudoActivityInterval: 30000
      }
    }
  });
}