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
		Then.onTheHomePage.iShouldSeeTheCategoryList();
	});

	opaTest("Should see the product list", function (Given, When, Then) {
		// Actions
		When.onTheHomePage.iPressOnTheFlatScreensCategory();

		// Assertions
		Then.onTheCategoryPage.iShouldBeTakenToTheFlatScreensCategory().
			and.iShouldSeeTheProductList();
	});

	opaTest("Should see the product page", function (Given, When, Then) {
		// Actions
		When.onTheCategoryPage.iPressOnTheFirstProduct();

		// Assertions
		Then.onTheProductPage.iShouldSeeTheProductTitle();
	});

	opaTest("Should add a product to the cart", function (Given, When, Then) {
		// Actions
		When.onTheProductPage.iAddTheDisplayedProductToTheCart();

		When.onTheProductPage.iToggleTheCart();

		// Assertions
		Then.onTheCartPage.iShouldSeeTheProductInMyCart()
			.and.iShouldSeeTheTotalPriceUpdated();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
