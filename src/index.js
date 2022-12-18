import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';
import './index.css';
import App from './components/app';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
