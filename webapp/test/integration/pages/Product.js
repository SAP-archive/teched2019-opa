sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/Properties"
], function (
	Opa5,
	Press,
	Properties) {
	"use strict";

	Opa5.createPageObjects({
		onTheProductPage: {
			viewName: "Product",

			actions: {
				iAddTheDisplayedProductToTheCart: function () {
					return this.waitFor({
						controlType: "sap.m.Button",
						matchers: new Properties({text: "Add to Cart"}),
						actions : new Press(),
						errorMessage: "The add to cart button was not found and could not be pressed"
					});
				},

				iToggleTheCart: function () {
					return this.waitFor({
						controlType: "sap.m.Button",
						matchers: new Properties({icon: "sap-icon://cart"}),
						actions: new Press(),
						errorMessage: "The cart button was not found and could not be pressed"
					});
				}
			},

			assertions: {
				iShouldSeeAnAvatarButton: function () {
					return this.waitFor({
						controlType: "sap.m.Button",
						matchers: new Properties({icon: "sap-icon://customer"}),
						success: function () {
							Opa5.assert.ok(true, "Avatar button is visible");
						},
						errorMessage: "There is no avatar button"
					});
				}
			}
		}
	});
});
