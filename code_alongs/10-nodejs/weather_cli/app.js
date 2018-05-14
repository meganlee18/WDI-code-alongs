var convertToCelsius = require('./lib');

var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=melbourne&units=imperial&APPID=150fe397273b0898d4e8b500237412d9'

request(url, function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the homepage.
  var res = JSON.parse(body)
  console.log(Math.round(res.main.temp))
  
  //pass in farenheit numbers from Open Weather API in the brackets below: 
  console.log(Math.round(convertToCelsius(res.main.temp)))
});