var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function () {   //Subheading for test is 'Coolculator'
  var mm = new Coolculator()    //creating a new instance of the Coolculator object

  it('should add', function () {         //test description
    expect(mm.add(2, 3)).to.equal(5)
  })

  it('should multiply', function () {
    expect(mm.multiply(2, 3)).to.equal(6)
  })

  it('should subtract', function () {
    expect(mm.subtract(3, 2)).to.equal(1)
  })

  it('should divide', function () {
    expect(mm.divide(3, 2)).to.equal(1.5)
  })

  it('should return highest number', function () {
    expect(mm.highest(3, 2)).to.equal(3)
  })

  it('should return lowest number', function () {
    expect(mm.lowest(3, 2)).to.equal(2)
  })

  it('should take a number and double it', function () {
    expect(mm.double(3)).to.equal(6)
  })

  it('should square number', function () {
    expect(mm.square(3)).to.equal(9)
  })

  it('should raise the first number to the power of the second number', function () {
    expect(mm.raise(3, 2)).to.equal(9)
  })

  it('should return true if negative and false when positive', function () {
    expect(mm.isNegative(3)).to.equal(false)
  })

  it('should return true if positive and false when negative', function () {
    expect(mm.isPositive(3)).to.equal(true)
  })

  it('should return true if number is cool', function () {
    expect(mm.isCool(32)).to.equal(false)
  })

  it('should sum all numbers', function () {
    var numArray = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(mm.sum(numArray)).to.equal(36)
  })

  it('should multiply all numbers in array', function () {
    var numArray = [1, 2, 3]
    expect(mm.multiplyArray(numArray)).to.equal(6)
  })

  it('should find the mean of all numbers', function () {
    var numArray = [1, 2, 3]
    expect(mm.mean(numArray)).to.equal(2)
  })

  it('should calculate factorial', function () {
    expect(mm.factorial(5)).to.equal(120)
  })

  it('should return random integer between 0 and the number', function () {
    expect(mm.random(5)).to.be.within(0, 5)
  })
})
