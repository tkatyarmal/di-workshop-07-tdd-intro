// Here are some tests for some of JavaScript's built-in Array methods
var chai = require('chai')
var expect = chai.expect

describe('Array', function () {
  describe('#push()', function () {
    it('should add an item to the array', function () {
      var array = [1, 2, 3, 4, 5]
      array.push(6)
      expect(array).to.deep.equal([1, 2, 3, 4, 5, 6])
      //deep keyword is so that the elements in 'array' and [1, 2, 3, 4, 5, 6] are the same
    })

    it('should alter the length properly', function () {
      var array = [1, 1, 1, 1]
      array.push(1)
      expect(array.length).to.equal(5)
      //no need for deep keyword as array.length and '5' are both integers
    })
  })

  describe('#pop()', function () {
    it('should remove the last item in the array', function () {
      var array = [1, 2, 3, 4]
      var something = array.pop()             //setting it equal to a variable makes it easier to test if pop() returns last element

      expect(array).to.deep.equal([1, 2, 3])  //tests whether the last element has been removed
      expect(something).to.equal(4)   //tests whether the pop() also returns the last element
    })
  })

})
