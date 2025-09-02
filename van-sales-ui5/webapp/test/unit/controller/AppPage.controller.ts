/*global QUnit*/
import Controller from "eco/vansales/vansalesui5/controller/App.controller";

QUnit.module("App Controller");

QUnit.test("I should test the App controller", function (assert: Assert) {
	const oAppController = new Controller("App");
	oAppController.onInit();
	assert.ok(oAppController);
});