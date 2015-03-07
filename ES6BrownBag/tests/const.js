"use strict";

describe("using const", function () {
	it("will make a variable readonly", function () {
		var MAX_SIZE = 10;

		//MAX_SIZE = 11;//SyntaxError (not just ignored)

		expect(MAX_SIZE).toBe(10);
	});
});