var http = require('http');

var app = function(request, response) {
  response.write('yay! welcome to my first node app');
  response.end();
}

var server = http.createServer( app );

server.listen( 8888 );