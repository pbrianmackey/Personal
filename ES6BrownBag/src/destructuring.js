describe("how destructure works", function() {
	it("will provide swap values", function() {
		let x = 2;
		let y = 4;

		[x,y] = [y,x];//swap values

		expect(x).toBe(4);
		expect(y).toBe(2);
	});
});

describe("how destructure works", function() {
	it("will swap values for objects too", function() {
		let o = {p: 42, q: true};
		let {p, q} = o;//p = o.p; q = o.q;

		expect(p).toBe(42);
		expect(q).toBe(true);

		// Assign new variable names
		//it looks like an object literal is built but it is not
		let {p: foo, q: bar} = o;//foo = o.p; bar = o.q

		expect(foo).toBe(42);
		expect(bar).toBe(true);

		expect(p).toBe(42);
		expect(q).toBe(true);

		// Assign new variable names failure
		let {foo2, bar2} = o;

		expect(foo2).toBeUndefined();
		expect(bar2).toBeUndefined();

		expect(p).toBe(42);
		expect(q).toBe(true);
	});

	it("works with parameters", function() {
		//jQuery like API call to POST
		let doWork = function(url, {data, cache, headers}){
			return data;
		};

		let result = doWork(
			"api/test", {
				data: "test",
				cache: false
			}
		);

			expect(result).toBe("test");
	});
});
