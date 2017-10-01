var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

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
  Books.find(function(err, books){
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

app.put('/books/:_id',function(req,res){
  var book = req.body;
  var query = req.params._id;

  var update = {
    '$set':{
      title:book.title,
      description:book.description,
      image:book.image,
      price:book.price
    }
  };
  //new means it will return updated document
  var options = {new: true};

  Books.findOneAndUpdate(query, update, options, function(err,books){
    if(err){
      throw err;
    }
    res.json(books);
  })
})

//api

app.listen(3001,function(err){
  if(err){
    console.log(err)
  }
  console.log('api server on port 3001')
})
