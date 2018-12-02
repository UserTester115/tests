describe("Declare a variable", function() {
// Define Variables on the Global Level (here)
	var test1 = "www.theTestingWorld.com";
//before Each
	beforeEach(function() {
	});
//after Each
	afterEach(function() {
	
	});
// test specs go here
	it("Test case 01", function() {
		console.log(test1);
	});
});

// If the Variale is inside the block
// but needs to be executed GLOBALLY
// use a keyword THIS for it Alternatively:
// instead of VAR used THIS and in 
// console used: console.log(this.test1);

describe("Declare a variable", function() {
// do not Define Variables on the Global Level

//before Each
	beforeEach(function() {
		this.test1 = "www.theTestingWorld.com";
	});
//after Each
	afterEach(function() {
	
	});
// test specs go here
	it("Test case 01", function() {
		console.log(this.test1);
	});
});