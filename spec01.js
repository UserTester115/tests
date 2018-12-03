// spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', function() {
	  browser.get('https://angularjs.org');
	  browser.get('http://juliemr.github.io/protractor-demo/');
	  browser.sleep(7000); // wait for 7 sec
	  console.log("The last step");
  });
});