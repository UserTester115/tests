// jasmine spec
describe("Suite: Validate Search fuctionality", function() {
	
	it("Verify Search with correct productID", function(){
		console.log("Test case 1");
		var a = 100
		var b = 200
		var c = a + b
		expect(c).toBe(300);
		console.log("value is: " + c);
		// expect(actualValue).toBe(expectedValue);
		// expect(actualValue).not.toBe(expectedValue);
	});
		it("Verify Search with correct productID", function(){
		console.log("Test case 2");
		var a = 200
		var b = 200
		var c = a + b
		expect(c).not.toBe(410);
		console.log("value is: " + c);
		// expect(actualValue).toBe(expectedValue);
		// expect(actualValue).not.toBe(expectedValue);
	});
	it("Verify if variable is True or False", function(){
		console.log("Test case 3");
		var d = true
		expect(d).toBe(true)
		console.log(d);
	});
});