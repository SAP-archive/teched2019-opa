sap.ui.define([
	"sap/ui/test/Opa5",
], function (
	Opa5) {
	"use strict";

	Opa5.createPageObjects({
		onTheCartPage : {
			viewName : "Cart",

			actions : {

			},

			assertions : {
				iShouldSeeTheProductInMyCart : function () {
					return this.waitFor({
						id : "entryList",
						success : function () {
							Opa5.assert.ok(true, "The cart has entries");
						},
						errorMessage : "The cart does not contain any entries"
					});
				},
				
				iShouldSeeTheTotalPriceUpdated: function () {
					return this.waitFor({
						id: "totalPriceText",
						success: function () {
							Opa5.assert.ok(true, "Total price is updated correctly");
						},
						errorMessage: "Total price is not updated correctly"
					});
				}
			}
		}
	});
});
