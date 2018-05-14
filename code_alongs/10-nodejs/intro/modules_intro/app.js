var shoutBestColor = require('./colorful');

color = 'pink' //no longer global because of the module export.
//every file is a new file except for files exported

console.log(shoutBestColor())