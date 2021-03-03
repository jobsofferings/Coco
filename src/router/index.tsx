import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Head from '../page/Head';
import LoginSign from '../page/LoginSign';
import Unknow from '../page/Head/Unknow';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginSign} />
      <Route path="/" component={Head} />
      <Route path="/*" component={Unknow} />
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;