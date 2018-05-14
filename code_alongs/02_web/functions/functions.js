
//why functions? 
//reuse this function
//scopes - global - everywhere has access, 
//with functions, variable
//		  




var numbers = [1,2,3,4];

//input arr of numbers -> sum
var sum = function (arrOfNumbers) {
	var total = 0;

	for (var index = 0; index < arrOfNumbers.length; index ++) {
	total = total + arrOfNumbers[index];
}
	return total; 
//return will get you out of the function
//e.g console.log("hello") -> this won't be seen
}

var addFive = function (num) {
	var result = num + 5;
	return result;

/*


//corresponding string whithin the array of strings
//find the length of the string within the array
//



var lengths = function (arrOfStrings) {       //["one", "four"]
	var lengthOne = arrOfStrings[0].length                    //[1,2,3]
	var lengthTwo = arrOfStrings[1].length
	return [lengthOne,lengthTwo]

	lengths["Game","Fish"]

}


var lengths = function (arrOfStrings) {
var arrOfNums = [];
 for (var i = 0; i < arrOfStrings.length; i++) {   //--> outside of the loop
 		//var lengthOne = arrOfStrings[i].length 	   // i in the bracket -> keeps going up as described in the loop
 		arrOfNums.push(arrOfStrings[i].length)
 	}
return arrOfNums
}

lengths(['apple','pie'])



var lengths = function (arr) {
return [arr[0].length, arr[1].length]

}

*/


var numbers = [1,2,3,4];
var scores = [2,3];
var result = sum(numbers);
console.log(result)
//var result = sum( scores );
console.log( addFive(sum(scores) ) );



var total = 0;

for (var index = 0; index < numbers.length; index ++) {
	total = total + numbers[index];
}

console.log(total);


// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

	//*hints*
	//build the string and return it or ...
	//just console log the built string in here


var calculateAge = function (currentYear, birthYear) {
	var ageOne = currentYear - birthYear;
	var ageTwo = ageOne + 1;
	//build the string and return it to
	var message = "You are either " + ageOne + " or " + ageTwo;
	//return message
	console.log(message)

}
	
calculateAge(2018,1935);



//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

//list = ["cake","pudding"]
//list[0].length
//[4,7]

var lengths = function(arrOfStrings) {
var stringLength = []

	for (var index = 0; index < arrOfStrings.length; index++) {

		stringLength.push(arrOfStrings[index].length);
	}
		return stringLength;
}
lengths( ['cake','pudding'] );



// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// To be finished in homework










// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// To be finished in homework
















