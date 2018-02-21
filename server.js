var express	= require('express'),
	app 	= express(),
	port	= process.env.PORT || 8080,
	morgan	= require('morgan');

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './html')

app.use('/', express.static('html'))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/editor', function (req, res) {
  res.render('editor')
})

app.get('/settings', function (req, res) {
  res.render('settings')
})


app.listen(port);