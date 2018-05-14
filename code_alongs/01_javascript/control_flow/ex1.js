console.log('conditionals');

var age = "21";
var hasMoney = true; 

if (age > 18 && age < 22 && hasMoney == true) {
	console.log('party till you drop');
	console.log('drink up');

} else { 
console.log ('stay in school');
}


/*
the if statement

if (condition) {
	


}

-----

if (condition) {
	

} else {
	

}


*/



/*

Write an else if statement that checks to see if a variable called year is in the past, 
present, or future.
You'll console.log three possible messages depending on what year it is...
"I'm in the present!" if the year is equal to 2015
"Whoa! Blast from the past!" if the year is less than 2015
"Greetings from the future!" if the year is greater than 2015

Bonus Challenge Research JavaScript's date methods, 
and find one that will return to you the current, four digit year. Once you have 
grabbed that year, assign it to a variable, and use that in your else if statement.

*/



var year = "2015";


if (year === "2015" ) { 
	console.log ('Im in the present'); 

}

if (year > "2015") {
	console.log ('Greetings from the Future');
}

if (year < "2015") {
	console.log ('Whoa! Blast from the past!');
}


if (year > "2015") {
	console.log ('future');

} else {
	console.log ('past');
}



