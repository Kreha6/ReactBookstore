import React from 'react'
import { render } from 'react-dom'
import routes from './components/routes'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const renderApp = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)
