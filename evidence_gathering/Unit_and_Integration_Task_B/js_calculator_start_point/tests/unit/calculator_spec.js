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
    const previousTotal = calculator.previousTotal = 4
    console.log(previousTotal)
    const calculation = calculator.add(1)
    console.log(calculation)
    assert.equal(calculation, 5)
  })

  it("should be able to subtract", function(){
    const.runningTotal 
  })

});



// - `calculator.add()` - add 1 to 4 and get 5
// - `calculator.subtract()` subtract 4 from 7 and get 3
// - `calculator.multiply()` - multiply 3 by 5 and get 15
// - `calculator.divide()` - divide 21 by 7 and get 3
