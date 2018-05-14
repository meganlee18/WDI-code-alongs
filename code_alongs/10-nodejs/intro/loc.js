// write a CLI program 
// You can pass in a file name 
// the program will count the number of lines of code
// print it in the console

// node loc.js ex1.js
// 20
// node loc.js ex2.js
// 17

var fs = require('fs');

var buffer = fs.readFileSync( process.argv[2] );
var lines = buffer.toString().split('\n');

console.log(lines.length);

