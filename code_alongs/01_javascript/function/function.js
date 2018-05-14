var add = function () {
return 1 + 2
}

add(2)

var add = function (num1, num2) {
return (num1 + num2)

add (3,4)

}


var thisarray = ['skynet', 'apples']
var thatarray = ['oranges', 'mangoes']

var generateRandomElement = function (arr) {
	var randIndex = Math.floor(Math.random() * arr.length)
	return arr[randIndex]
}

var first = generateRandomElement(thisArray)
var second = generateRandomElement(thatArray)
console.log (first + ' for ' + second)

//var first = thisarray[Math.floor(Math.random() * thisarray.length)]
//var second = thatarray[Math.floor(Math.random() * thatarray.length)]