sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/BindingPath",
	"sap/ui/test/actions/Press"
], function (
	Opa5,
	BindingPath,
	Press) {
	"use strict";

	Opa5.createPageObjects({
		onTheHomePage : {
			viewName : "Home",

			actions : {
				iPressOnTheFlatScreensCategory : function () {
					return this.waitFor({
						controlType : "sap.m.StandardListItem",
						matchers : new BindingPath({path : "/ProductCategories('FS')"}),
						actions : new Press(),
						errorMessage : "The category list does not contain required selection"
					});
				}
			},

			assertions: {
				iShouldSeeTheCategoryList : function () {
					return this.waitFor({
						id : "categoryList",
						success : function () {
							Opa5.assert.ok(true, "Found the category List");
						}
					});
				}
			}
		}
	});
});
