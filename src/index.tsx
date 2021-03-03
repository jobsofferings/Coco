import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import './reset.css'

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();