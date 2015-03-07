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
		let {p, q} = o;

		expect(p).toBe(42);
		expect(q).toBe(true);

		// Assign new variable names
		let {p: foo, q: bar} = o;

		expect(foo).toBe(42);
		expect(bar).toBe(true);

		expect(p).toBe(42);
		expect(q).toBe(true);

		// Assign new variable names failure
		let {foo2, bar2} = o;

		expect(foo2).toBe(undefined); 
		expect(bar2).toBe(undefined);

		expect(p).toBe(42);
		expect(q).toBe(true); 
	});
});