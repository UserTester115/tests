describe('Protractor Suite', function() {
  it('launch app and verify title', function() {
    browser.get('https://sharely.ch/');

    expect(browser.getTitle()).toEqual('Sharely Mietplattform - Lokal mieten und vermieten');
  });
});
