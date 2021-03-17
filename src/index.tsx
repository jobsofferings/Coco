import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as serviceWorker from './serviceWorker';
import './reset.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Route />
  </QueryClientProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();