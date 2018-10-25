var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function () {   //Subheading for test is 'Coolculator'
  var mm = new Coolculator()    //creating a new instance of the Coolculator object

  it('should add', function () {         //test description
    expect(mm.add(2, 3)).to.equal(5)
  })

  it('should multiply', function () {    //test description
    expect(mm.multiply(2, 3)).to.equal(6)
  })

  it('should subtract', function () {    //test description
    expect(mm.subtract(3, 2)).to.equal(1)
  })
})
