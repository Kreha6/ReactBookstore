import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../client/reducers';
import routes from '../client/components/routes';
import axios from 'axios';
import { renderRoutes } from 'react-router-config';

function requestHandler(location){
  axios.get('http://localhost:3001/books')
    .then(function(response) {
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
    const store = createStoreWithMiddleware(reducers, {
      "books": {
        "books": response.data
      }
    })
    const context = {};

    const reactComponent = renderToString(
      <Provider store={store}>
        <StaticRouter location={location} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    return{reactComponent:reactComponent, initialState:store.getState(), context:context}
  })
    .catch(function(err){
        console.log('#Initial Server-side rendering error', err);
      })
}

module.exports = requestHandler;
