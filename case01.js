describe('Webpage Check Suite', function() {
  it('Launch and verify title', function() {
    browser.driver.get('https://sharely.ch/').then(function() {
	expect(browser.driver.getTitle()).toEqual('Sharely Mietplattform - Lokal mieten und vermieten');	
	});
   });
});
