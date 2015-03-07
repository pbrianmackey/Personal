"use strict";

describe("how var works", function () {
	it("will provide function scope", function () {

		var runExample = function runExample(flag) {

			if (flag) {
				var x = 3;
			}
			return x;
		};

		var result = runExample(true);
		expect(result).toBe(3);
	});
});

describe("how let works", function () {
	it("will provide block scope", function () {

		var runExample = function runExample(flag) {
			if (flag) {
				var _x = 3;
				return _x; //coment out to fail
			}
			return x;
		};

		var result = runExample(true);
		expect(result).toBe(3);
	});
});