describe("how var works", function() {
	it("will provide function scope", function() {

		var runExample = function(flag){

			if(flag){
				var x = 3;
			}
			return x;
		}

		var result = runExample(true);
		expect(result).toBe(3);
	});
});

describe("how let works", function() {
	it("will provide block scope", function() {

		let runExample = function(flag){
			if(flag){
				let x = 3;
				return x;//coment out to fail
			}
			return x;
		}

		let result = runExample(true);
		expect(result).toBe(3);
	});
});