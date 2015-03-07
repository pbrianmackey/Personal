describe("using const", function() {
	it("will make a variable readonly", function() {
		const MAX_SIZE = 10;

		//MAX_SIZE = 11;//SyntaxError (not just ignored)

		expect(MAX_SIZE).toBe(10);
	});
});

