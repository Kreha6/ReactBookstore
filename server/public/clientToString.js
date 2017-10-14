import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/components/App';
import Menu from '../../client/components/Menu';
import {StaticRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../../client/reducers';
import routes from '../../client/components/routes';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

function toHtml(location) {
  const routerContext = {};
  const appString = renderToString(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <StaticRouter location={location} context={routerContext}>
        {routes}
      </StaticRouter>
    </Provider>
  );


  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>html from the server</title>
        <link rel="stylesheet" href="./bundle.css" />
      </head>

      <body>
        <div id="app">${appString}</div>
      </body>

      <script src="./bundle.js"></script>
    </html>
  `;
};


export default toHtml;
