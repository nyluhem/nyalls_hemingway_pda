const Calculator = require('../../public/js/calculator.js')
const assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it("should be able to add", function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it("should be able to subtract", function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it("should be able to multiply", function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it("should be able to divide", function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it("should be able to concat multiple number button clicks", function() {
    // - `calculator.numberClick()` - concatenate multiple number button clicks
    calculator.numberClick(2)
    calculator.numberClick(4)
    assert.equal(calculator.runningTotal, 24)
  })

  it("should be able to chain multiple operations together", function() {
    // - `calculator.operatorClick()` - chain multiple operations together
    calculator.previousTotal = 21
    calculator.runningTotal = 5
    calculator.previousOperator = '-'
    calculator.operatorClick('+')
    calculator.runningTotal = 7
    calculator.operatorClick('-')
    assert.equal(calculator.runningTotal, 23)
  })

  it("should be able to clear the running total without affecting the calculation", function() {
    // - `calculator.clearClick()` - clear the running total without affecting the calculation
    calculator.previousTotal = 21
    calculator.runningTotal = 5
    calculator.previousOperator = '-'
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.clearClick()
    assert.equal(calculator.previousTotal, 16)
  })

});
