/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/WorksApp01/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/WorksApp01/test/integration/pages/Worklist",
	"zjblessons/WorksApp01/test/integration/pages/Object",
	"zjblessons/WorksApp01/test/integration/pages/NotFound",
	"zjblessons/WorksApp01/test/integration/pages/Browser",
	"zjblessons/WorksApp01/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.WorksApp01.view."
	});

	sap.ui.require([
		"zjblessons/WorksApp01/test/integration/WorklistJourney",
		"zjblessons/WorksApp01/test/integration/ObjectJourney",
		"zjblessons/WorksApp01/test/integration/NavigationJourney",
		"zjblessons/WorksApp01/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});