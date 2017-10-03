var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
//const fs = require('fs');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookstore');

//session
mongoose.connection.on('error', console.error.bind('console', 'MongoDB - error'));

app.use(session({
  secret: 'mySecretString',
  saveUninitialized: false,
  resave:false,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 2}, // 2 days in milliseconds
  store: new MongoStore({mongooseConnection: mongoose.connection, ttl: 2 * 24 * 60 * 60})
  //ttl: 2 days * 24 hours * 60 minutes * 60 seconds
}))

app.post('/cart', function(req,res){
  var cart = req.body;
  req.session.cart = cart;
  req.session.save(function(err){
    if(err){
      throw err;
    }
    res.json(req.session.cart);
  })
})

app.get('/cart', function(req,res){
  if(typeof req.session.cart !== 'undefined'){
    //there is something in session
    res.json(req.session.cart);
  }
});



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
      console.log('error while deleting', err);
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

app.get('/images', function(req,res){
  const imgFolder = __dirname + '/public/images/';
  const fs = require('fs');
  fs.readdir(imgFolder, function(err,files){
    if(err){
      return console.error(err);
    }
    const filesArr = [];
    files.forEach(function(file){
      filesArr.push({name:file});
    });
    res.json(filesArr);
  })
})

app.listen(3001,function(err){
  if(err){
    console.log(err)
  }
  console.log('api server on port 3001')
})
