var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));

//api
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookstore');

var Books = require('./models/books.js');

app.post('/books', function(req,res){
  var book = req.body;

  Books.create(book, function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
})

app.get('/books', function(req,res){
  books.find(function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
})

app.delete('/books/:_id',function(req,res){
  var query = {_id: req.params._id};

  Books.remove(query, function(err,books){
    if(err){
      throw err;
    }
    res.json(books);
  })
})

//api




app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
});

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
