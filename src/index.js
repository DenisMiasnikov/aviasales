/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import * as dataActions from './actions/dataFetchAction';
import TicketService from './services/ticket-services';
import reducer from './reducers/index';
import './index.css';
import App from './components/app';

const ticket = new TicketService();
const localId = localStorage.getItem('searchId');
if (!localId) {
  ticket.getSearchId().then((res) => {
    localStorage.setItem('searchId', `${res.searchId}`);
  });
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

if (localId) {
  store.dispatch(dataActions.getData(localId));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
