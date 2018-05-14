console.log('demo2');

/*

The Fortune Teller
Why pay a fortune teller when you can program it yourself.
Store the following into variables:

number of children
partner's name
geographic location
job title

output the fortune to the screen like so:
You will be X in Y, and married to Z with N kids

*/

var numberOfChildren = 5;
var partnersName = "Toto";
var geographicLocation = "Maldives";
var jobTitle = "millionnaire";

var fortune = "You will be ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kids ' ";

console.log(fortune);


/*
Write a program to work out the area of a rectangle
collect the width & height from the user
calculate an area
display the result

hints
-----

prompt () for input
console.log or alert() for output
Number () for type conversion

extension
---------
how about change program to add 2 numbers instead?
Collect 2 number from user
add them
display result

*/

var width = prompt ('what is the width');
var height = prompt ('what is the height');
var area = width * height;
console.log ('The area is ' + area);

var numberOne = prompt ('Enter the first number');
var numberTwo = prompt ('Enter the second number');
var result = numberOne + numberTwo;
console.log ('The result is ' + result);





