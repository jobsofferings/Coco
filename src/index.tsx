import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import antdConfig from 'src/config/antdConfig'
import './reset.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider {...antdConfig}>
    <Route />
    </ConfigProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();