describe("Declare a variable", function() {
// do not Define Variables on the Global Level

//before Each
	beforeEach(function() {
		this.test1 = "www.theTestingWorld.com";
		console.log("------------------ BEFORE EACH ------------------");
	});
//after Each
	afterEach(function() {
		console.log("------------------- AFTER EACH ------------------");
	});
// test specs go here
	it("Test case 01", function() {
		console.log(this.test1);
	});
	it("Test case 02", function() {
		console.log("Something");
	});
		// NESTED SUITE GOES HERE
		// change describe to XDESCRIBE to SKIP the Suite entirely *(not eXecute)
		xdescribe("A NESTED Suite", function() {
		// test specs go here
		it("Test case 03", function() {
			console.log(this.test1);
		});
		it("Test case 04", function() { 
			console.log("Something");
		});
});

});


