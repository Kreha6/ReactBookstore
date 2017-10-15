var express = require('express');
var path = require('path');
var logger = require('morgan');
var httpProxy = require('http-proxy');
var routes = require('./routes/index.js');
var app = express();

const apiProxy = httpProxy.createProxyServer({
  target:'http://localhost:3001'
});

app.use('/api', function(req,res){
  apiProxy.web(req,res);
})

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, './', 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
