describe("Suite 01", function() {
	it("Case 01 of Suite 01", function() {
	var a = 10;
	console.log(a);	
	expect(a).toBeLessThan(9);
	});
	it("Case 01 of Suite 02", function() {
	var b = 20;
	console.log(b);
	expect(b).toBeGreaterThan(19);
	});
});