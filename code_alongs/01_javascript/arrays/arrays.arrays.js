console.log ('hip hip');

/* 
Write a program to count the number of words in a sentence.
User enters a sentence
output the number of words

Things we need:

- set up variables (sentence and words)

//create a string
//display output

var sentence = "welcome to the universe"
var count = 0

for (var i = 0; i < sentence.length; i++) {
	if (sentence[i] === ' ' ) {
		count ++;
	}
}
console.log(count + 1);

*/

var sentence = "Hello and welcome to the universe"
var words = sentence.split (' ');
console.log (words.length);





/*
   reverse ()

	What?
	- reversing the elements in an array

	Why?
	- easier to add new element (push) to the first

*/

  

var array = ["umbrella", "orange", "banana"];
array.reverse ();
console.log (array)


