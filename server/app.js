import express from 'express';
import path from 'path';
import logger from 'morgan';
import httpProxy from 'http-proxy';
import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';
import template from './template';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../client/reducers';

var app = express();

const apiProxy = httpProxy.createProxyServer({
  target:'http://localhost:3001'
});

app.use('/api', function(req,res){
  apiProxy.web(req,res);
})

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req,res){

  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

  const appString = renderToString(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  );

  res.send(template({
    body: appString,
    title: 'Hello World from the server'
  }));
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

app.set('port', 3000);

var server = http.createServer(app);
server.listen(port);
