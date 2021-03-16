import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import About from 'src/page/Head/About';
import Archive from 'src/page/Head/Archive';
import ArticleDetail from 'src/page/Head/ArticleDetail';
import Index from 'src/page/Head/Index/index';
import Message from 'src/page/Head/Message';
import LoginSign from '../page/LoginSign';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginSign} />
      <Route exact path={'/'} component={Index} />
      <Route exact path={'/detail/:id'} component={ArticleDetail} />
      <Route exact path={'/archive'} component={Archive} />
      <Route exact path={'/about'} component={About} />
      <Route exact path={'/message'} component={Message} />
      <Redirect from='/*' to={'/'} />
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;