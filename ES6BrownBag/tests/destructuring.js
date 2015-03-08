"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

describe("how destructure works", function () {
	it("will provide swap values", function () {
		var x = 2;
		var y = 4;

		var _ref = [y, x];

		var _ref2 = _slicedToArray(_ref, 2);

		x = _ref2[0];
		y = _ref2[1];
		//swap values

		expect(x).toBe(4);
		expect(y).toBe(2);
	});
});

describe("how destructure works", function () {
	it("will swap values for objects too", function () {
		var o = { p: 42, q: true };
		var p = o.p;
		var q = o.q;
		//p = o.p; q = o.q;

		expect(p).toBe(42);
		expect(q).toBe(true);

		// Assign new variable names
		//it looks like an object literal is built but it is not
		var foo = o.p;
		var bar = o.q;
		//foo = o.p; bar = o.q

		expect(foo).toBe(42);
		expect(bar).toBe(true);

		expect(p).toBe(42);
		expect(q).toBe(true);

		// Assign new variable names failure
		var foo2 = o.foo2;
		var bar2 = o.bar2;

		expect(foo2).toBeUndefined();
		expect(bar2).toBeUndefined();

		expect(p).toBe(42);
		expect(q).toBe(true);
	});

	it("works with parameters", function () {
		//jQuery like API call to POST
		var doWork = function doWork(url, _ref) {
			var data = _ref.data;
			var cache = _ref.cache;
			var headers = _ref.headers;

			return data;
		};

		var result = doWork("api/test", {
			data: "test",
			cache: false
		});

		expect(result).toBe("test");
	});
});