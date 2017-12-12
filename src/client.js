"use strict"
//REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//REACT-ROUTER
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
//IMPORT ACTIONS
import {addToCart} from './actions/cartActions';

//STEP 1: Create store by passing reducer as argument to createStore method:
const middleware = applyMiddleware(thunk, logger);
//PASS INITIAL STATE FROM SERVER STORE
const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState, middleware);

import routes from './routes';

const Routes = (
  <Provider store={store}>
    {routes}
  </Provider>
)

render (
  Routes, document.getElementById('app')  
)