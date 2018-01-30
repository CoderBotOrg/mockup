var express	= require('express'),
	app 	= express(),
	port	= process.env.PORT || 8080,
	morgan	= require('morgan');

app.use(morgan('dev'));
app.use('/', express.static('html'))

app.listen(port);