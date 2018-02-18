import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'http-proxy';

const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

//if user is auth'd do not create session for him
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const app = express();

const apiProxy = proxy.createProxyServer({target: 'http://localhost:3001'});

app.use('/api', function(req, res) {
  apiProxy.web(req, res);
})

app.use(express.static('public'));

app.get('*', (req, res) => {
  //req does contain cookies so I need it inside createStore
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData
      ? route.loadData(store)
      : null;
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        //this new Promise wrapping original one is going to be resolved no matter what
        promise.then(resolve).catch(resolve);
      })
    }
  })

  //connecting all the promises into one
  Promise.all(promises).then(() => {
    const context = {};

    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  })

});

app.post('/signin', requireSignin, Authentication.signin);
app.post('/signup', Authentication.signup);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
