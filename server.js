var express = require('express');
var app = express();
var middleware = require('./middleware.js');
const PORT = process.env.PORT || 3000;
app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication ,function (req, res){
	res.send('About us!');
});

app.use(express.static(__dirname+'/public'));//expose an entire folder
app.listen(PORT, function (){ //the function is called when the server starts
 console.log('Server is started at port '+ PORT);
});