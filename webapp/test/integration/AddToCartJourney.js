/* global QUnit */

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Home",
	"./pages/Category",
	"./pages/Product",
	"./pages/Cart"
], function (opaTest) {
	"use strict";

	QUnit.module("Buy Product Journey");

	opaTest("Should see the category list", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheHome.iShouldSeeTheCategoryList();
		
	});

	//We are still on the second category
	opaTest("Should see the product list", function (Given, When, Then) {
		// Actions
		When.onTheHome.iPressOnTheFlatScreensCategory();

		// Assertions
		Then.onTheCategory.iShouldBeTakenToTheFlatScreensCategory().
			and.iShouldSeeTheProductList();
	});

	opaTest("Should see an avatar button on the product page", function (Given, When, Then) {
		// Actions
		When.onTheCategory.iPressOnTheFirstProduct();

		// Assertions
		Then.onTheProduct.iShouldSeeAnAvatarButton();
	});

	opaTest("Should add a product to the cart", function (Given, When, Then) {
		// Actions
		When.onTheProduct.iAddTheDisplayedProductToTheCart();

		When.onTheProduct.iToggleTheCart();

		// Assertions
		Then.onTheCart.iShouldSeeTheProductInMyCart()
			.and.iShouldSeeTheTotalPriceUpdated();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
