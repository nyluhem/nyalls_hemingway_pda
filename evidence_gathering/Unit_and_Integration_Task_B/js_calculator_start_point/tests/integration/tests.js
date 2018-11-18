var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it("should concatenate multiple number button clicks", function(){

  })

  it("should chain multiple operations together", function() {

  })

  it("should be able to clear the running total without affecting the calculation", function() {
    
  })

  // - `calculator.numberClick()` - concatenate multiple number button clicks
  // - `calculator.operatorClick()` - chain multiple operations together
  // - `calculator.clearClick()` - clear the running total without affecting the calculation



});