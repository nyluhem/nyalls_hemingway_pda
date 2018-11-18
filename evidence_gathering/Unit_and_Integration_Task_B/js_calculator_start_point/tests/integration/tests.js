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

  it("should update the display of the running total", function(){
    running_total = element(by.css("#running_total"))
    element(by.css("#number2")).click();
    element(by.css("#number4")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("24")
  })

  it("should be able to update the display when one clicks one of the operations", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("6")
  })

  it("should be able to chain multiple operations together", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("12")

  })

  it("should work for postive numbers", function() {
    //see above for test working with positive numbers
  })

  it("should work for negative numbers", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number2")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("-2");
  })

  it("should work for decimal numbers", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number3")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("1.5");
  })

  it("should work for very large numbers", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number1")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number2")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2000000000");
  })


  it("should display not a number when trying to divide by 0", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number5")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("NaN");
  })

});
