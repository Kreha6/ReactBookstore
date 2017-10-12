import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import Menu from './components/Menu'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const initialState = window.__INITIAL_STATE__;
const renderApp = () => (
  <Provider store={createStoreWithMiddleware(reducers,initialState)}>
    <BrowserRouter>
      <div>
        <Menu />
        <App/>
      </div>
    </BrowserRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)
