sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/util/Storage"
], function (Opa5, Storage) {
	"use strict";

	return Opa5.extend("sap.ui.demo.cart.test.integration.arrangements.Startup", {

		/**
		 * Starts the mocked app in an iframe
		 * @param {object} oOptionsParameter An object that contains the configuration for starting up the app.
		 * @param {int} oOptionsParameter.delay A custom delay to start the app with
		 * @param {string} [oOptionsParameter.hash] The in app hash can also be passed separately for better readability in tests
		 */
		iStartMyApp : function (oOptionsParameter) {
			var oOptions = oOptionsParameter || {};

			// start the app with a minimal delay to make tests fast but still async to discover basic timing issues
			oOptions.delay = oOptions.delay || 1;

			return this.iStartMyAppInAFrame({
				source: '../../index.html?sap-ui-language=en&sap-ui-animation=false&serverDelay=' + 
					oOptions.delay + (oOptions.hash ? "#/" + oOptions.hash : ""),
				autoWit: true
			});
		}
	});
});
