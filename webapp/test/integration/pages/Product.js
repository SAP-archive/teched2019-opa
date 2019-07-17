sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/matchers/I18NText"
], function (
	Opa5,
	Press,
	Properties,
	I18NText) {
	"use strict";

	Opa5.createPageObjects({
		onTheProductPage: {
			viewName: "Product",

			actions: {
				iAddTheDisplayedProductToTheCart: function () {
					return this.waitFor({
						controlType: "sap.m.Button",
						matchers: new I18NText({propertyName: "text",key: "addToCartShort"}),
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
				iShouldSeeTheProductTitle: function () {
					return this.waitFor({
						controlType: "sap.m.Title",
						matchers: new Properties({text: "Bending Screen 21HD"}),
						success: function () {
							Opa5.assert.ok(true, "Product title is visible");
						},
						errorMessage: "There is no product title"
					});
				}
			}
		}
	});
});
