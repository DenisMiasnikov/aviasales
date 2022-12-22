/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import * as dataActions from './actions/dataFetchAction';
import TicketService from './services/ticket-services';
import './index.css';
import App from './components/app';
import store from './store/store';

const ticket = new TicketService();
const localId = localStorage.getItem('searchId');
if (!localId) {
  ticket
    .getSearchId()
    .then((res) => {
      localStorage.setItem('searchId', `${res.searchId}`);
      store.dispatch(dataActions.getData(res.searchId));
    })
    .catch((e) => {
      console.log(e);
    });
}
if (localId) {
  store.dispatch(dataActions.getData(localId));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
