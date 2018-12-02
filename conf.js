// configuration file;
exports.config = {
	directConnect: true,
	
	//Capabilities to be passed to webdriver instace.
	// capabilities: {
	browserName: 'chrome',
	// },
// },
// Framework to use: Jasmine is recommended.
framework: 'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',

// Spec patterns are relative to the current working directory
// when Protractor is called
// specs: ['case01.js', 'case02pro.js'],
specs: ['case01.js'],

// Options to be passed to Jasmine.
jasmineNodeOpts: {
	defaultTimeoutInterval: 30000
}

};