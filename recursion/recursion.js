
//work out the constant base case 
//problem
//sub problem
//counting numbers of items in a list

// do not use .length
// do not use for
// do not use forEach or map

// 1. count(numbers) // => 4
// 2. sum a list of numbers
// 3. calculation factorial

var numbers = [1, 2, 3, 4]

var count = function (numbers) {
  if (numbers.length) {
    return 1 + count(numbers.slice(1))
  } else {
    return 0;
  }
}
// count([1,2,3,4]) -> 4


// sum a list of numbers 
//1st elem + sum of the rest
var sum = function (numbers) {
  if (numbers.length == 1) {
    return numbers[0]
  } else {       //1         //[2,3,4]
    return numbers.shift() + sum(numbers)
  }
}

// calculation factorial                 
var factorial = function (num) {
  var nextNum = num - 1
  if (num === 1) {
    return num
  } else {
    return num * factorial(nextNum)
  }
}
