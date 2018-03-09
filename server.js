var express	= require('express'),
	app 	= express(),
	port	= process.env.PORT || 8081,
	morgan	= require('morgan');

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './html')

app.use('/', express.static('html'))
app.use('/node_modules', express.static('node_modules'))

app.get('/', function (req, res) {
  res.render('index', {
  	title: "Indice"
  })
})

app.get('/editor', function (req, res) {
  res.render('editor', {
  	title: "Modifica Attività"
  })
})

app.get('/settings', function (req, res) {
  res.render('settings', {
  	title: "Impostazioni"
  })
})

app.listen(port);