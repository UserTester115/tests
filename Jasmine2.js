describe("Suite for something.", function() {
	
	// toContain - comparison function to detect if some text is present
	it("test case01", function() {
	var data="This is testing world";
	expect(data).toContain("testing");
	expect(data).not.toContain("smyt or gtfo");
	console.log(data);
	});
	// toBeLessThan - comparison function to detect boundary values
	it("test case02", function() {
	var a = 100;
	expect(a).toBeLessThan(101);
	expect(a).not.toBeLessThan(99);
	console.log(a);
	});
	// toBeGreaterThan - comparison function to detect boundary values
	it("test case03", function() {
	var b = 300;
	expect(b).toBeGreaterThan(299);
	expect(b).not.toBeGreaterThan(301);
	console.log(b);
	});
	// toEqual not.toEqual *toBe is used for Data only
	it("test case04", function() {
	var object01={
		K1:"val01",
		K2:"val02"
		};
	var object02={
		K3:"val01",
		K4:"val04"
		};
	expect(object01).toEqual(object02);
	var c = "Some text";
	expect(c).toEqual("Some Text");
	console.log(c);
	});
	// toBeNull not.toBeNull
	it("Test case 05. ToBe Null", function() {
	var d = "Anything";	
	expect(d).not.toBeNull();
	console.log(d);
	});
});