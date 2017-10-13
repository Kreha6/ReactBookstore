import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../client/reducers';
import routes from '../client/components/routes';
import axios from 'axios';

function requestHandler(req, res, next) {
  axios.get('http://localhost:3001/books').then(function(response) {
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
    const store = createStoreWithMiddleware(reducers, {
      "books": {
        "books": response.data
      }
    })
    const initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\\!--');
    const context = {};

    const reactComponent = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {routes}
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      redirect(context.status, context.url)
    } else {
      res.status(200).render('index', {reactComponent, initialState})
    }

  })
  .catch(function(err){
        console.log('#Initial Server-side rendering error', err);
      })
};

export default requestHandler;
