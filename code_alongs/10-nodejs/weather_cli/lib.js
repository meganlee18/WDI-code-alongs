// in lib.js you have function
// to covert f to c
// export that function
// require it in this file and use it

// to do - send a request to api
// console log temperature


//Converting Farenheit to Celsius
var convertToCelsius = function(farenheit) {
  var value = parseFloat(farenheit)
  return (value-32)/1.8;
}

module.exports = convertToCelsius
