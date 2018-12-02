describe("Test Suite beforeEach and afterEach", function() {
	// if we need to perform smth before cases: beforeEach
	beforeEach(function() {
		console.log(" ");
		console.log("------- Start Browser here -------");
		
	});
	// perform tasks after each case
	afterEach(function() {
	console.log("------- Close Browser here -------");
	});
	
	// specs are here
	it("Test Case 01", function() {
		console.log("This is a test");
	});
	it("Test Case 02", function() {
		console.log("This is a second test");
	});
});