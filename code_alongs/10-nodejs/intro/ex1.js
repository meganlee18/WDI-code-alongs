console.log(process.argv)
//It returns as an array - ['node', 'ex1.js', '1', '2']

//Write a CLI program that sums numbers passed in

// node ex1.js 1 2 3 

// 6

//console.log(process.argv[2] + process.argv[3] + process.argv[4])
//returns "123"

var total = 0;

for (var i=2; i<process.argv.length; i++) {
  total = total + Number(process.argv[i]);
}

console.log(total)
