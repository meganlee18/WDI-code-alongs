Homework

//Write a for loop that will iterate from 0 to 20. For each iteration, it will 
//check if the current number is even or odd, and report that to the screen 
//(e.g. "2 is even").


for (var count = 0; count <= 20; count ++) {
	if (count === 0) {
		console.log (count + " is even");
	} else if (count % 2 === 0) {
		console.log (count + " is even");
	} else {
		console.log (count + " is odd"); }
} 


//Write a for loop that will iterate from 0 to 10. 
//For each iteration of the for loop, it will multiply the number by 
//9 and log the result (e.g. "2 * 9 = 18").

//Bonus: Use a nested for loop to show the tables for every multiplier 
//from 1 to 10 (100 results total).



for (var count = 0; count <= 10; count++) {
	var result = count*9
	console.log (count + " * 9 = " + result);
}

