import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import routes from './components/routes';
import { renderRoutes } from 'react-router-config';
import './scss/app.scss';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const initialState = window.__INITIAL_STATE__;
const renderApp = () => (
  <Provider store={createStoreWithMiddleware(reducers,initialState)}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)
