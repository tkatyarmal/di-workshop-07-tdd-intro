class Coolculator {
  add(a, b) {
    return a + b
  }
  multiply(a, b) {
    return a * b
  }
  subtract(a, b) {
    return a - b
  }
  divide(a, b) {
    return a / b
  }
  highest(a, b) {
    return Math.max(a, b)
  }
  lowest(a, b) {
    return Math.min(a, b)
  }
  double(a) {
    return a * 2
  }
  square(a) {
    return a * a
  }
  raise(a, b) {
    return Math.pow(a, b)
  }
  isNegative(a) {
    if (a < 0) {
      return true
    }
    else if (a > 0) {
      return false
    }
  }
  isPositive(a) {
    if (a > 0) {
      return true
    }
    else if (a < 0) {
      return false
    }
  }
  isCool(a) {
    var number = a.toString()
    if (number[0] == number[(number.length - 1)]) {
      return true
    }
    else {
      return false
    }
  }
  sum(a) {
    var result = 0
    for (var i = 0; i < a.length; i++) {
      result += a[i]
    }
    return result
  }
  multiplyArray(a) {
    var result = 1
    for (var i = 0; i < a.length; i++) {
      result *= a[i]
    }
    return result
  }
  mean(a) {
    var result = 0
    for (var i = 0; i < a.length; i++) {
      result += a[i]
    }
    return (result / a.length)
  }
  factorial(a) {
    var result = 1
    for (; a > 0; a--) {
      result *= a
    }
    return result
  }
  random(a) {
    return Math.floor(Math.random() * a)
  }
}

module.exports = Coolculator
