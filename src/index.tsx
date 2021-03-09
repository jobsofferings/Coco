import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index'
import * as serviceWorker from './serviceWorker';
import './reset.css'

ReactDOM.render(
  <Route />,
  document.getElementById('root')
);

serviceWorker.unregister();