sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/BindingPath",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/actions/Press"
], function (
	Opa5,
	BindingPath,
	Properties,
	Press) {
	"use strict";

	Opa5.createPageObjects({
		onTheCategoryPage : {
			viewName: "Category",

			actions: {
				iPressOnTheFirstProduct: function () {
					return this.waitFor({
						controlType: "sap.m.ObjectListItem",
						matchers: new BindingPath({path: "/Products('HT-1254')"}),
						actions: new Press(),
						errorMessage: "The product list does not contain required selection"
					});
				}
			},

			assertions: {
				iShouldSeeTheProductList: function () {
					return this.waitFor({
						id: "productList",
						success: function () {
							Opa5.assert.ok(true,"The product list was found");
						},
						errorMessage: "The product list was not found"
					});
				},

				iShouldBeTakenToTheFlatScreensCategory: function () {
					return this.waitFor({
						controlType: "sap.m.Page",
						matchers: new Properties({title: "Flat Screens"}),
						success: function () {
							Opa5.assert.ok(true,"The flat screens category page was found");
						},
						errorMessage: "The flat screens category page was not found"
					});
				}
			}
		}
	});
});
