var express = require('express');
var expressApp = express();

expressApp.configure(function() {
	expressApp.use(express.bodyParser());
	expressApp.use(express.static(__dirname + '/public'));
});

// start the server
var port = 7000;
expressApp.listen(port);
console.log('Listening on port ' + port + '...');