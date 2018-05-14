//document.querySelector
//document.querySelectorAll
//textContent - sandwiches <h1>textContent</h1>
//value toast <input type ="text">

//tip: input gives you strings
//tip: script runs straight away as you load

var num1Input = document.querySelector('.num1');
var num2Input = document.querySelector('.num2');
var calcBtn = document.querySelector('.calc-btn');
var resultSpan = document.querySelector('.result');

//functions are just values/things/objects
//event, function

var bam = function () {
	//get value from first input
	//get value from second input
	//add it
	var total = Number((num1Input.value)) + Number((num2Input.value));
	console.log('total:', total);
	resultSpan.textContent = total;
}
	//set text content of span to result

calcBtn.addEventListener ('click', bam);