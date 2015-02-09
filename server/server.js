var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '..', 'static')));

// Re-route page requests to fix refreshing page giving a 404
app.get('/list', function(req, res, next) {
	res.redirect('/');
});

app.get('/offers', function(req, res, next) {
	res.redirect('/');
});

app.listen(8080);
console.log('Server listening on port 8080');
