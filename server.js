var express = require('express');
var app = express();

/*app.get('/', function (req, res){
	res.send('Hello express!');
});

app.get('/about', function (req, res){
	res.send('About us');
})*/


var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: '+  new Date() +' '+req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication ,function (req, res){
	res.send('About us');
});

app.use(express.static(__dirname+'/public'));//expose an entire folder
app.listen(3000, function (){ //the function is called when the server starts
 console.log('Server is started!');
});