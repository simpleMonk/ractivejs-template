"use strict";

var expect = chai.expect;

describe("module:todo", function () {

	it("should run tests", function () {
		expect(1).to.equal(1);
	});

	it("should load ractive", function () {
		expect(Ractive.VERSION).to.equal("0.6.1");
	});

});