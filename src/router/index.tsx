import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import About from 'src/page/Head/About';
import Archive from 'src/page/Head/Archive';
import ArticleDetail from 'src/page/Head/ArticleDetail';
import Index from 'src/page/Head/Index/index';
import FriendLink from 'src/page/Head/FriendLink';
import LoginSign from '../page/LoginSign';

const history = createBrowserHistory();

const BasicRoute = () => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={LoginSign} />
      <Route exact path={'/'} component={() => <Index key='1' />} />
      <Route exact path={'/search/:id'} component={() => <Index key='2' />} />
      <Route exact path={'/detail/:id'} component={ArticleDetail} />
      <Route exact path={'/archive'} component={Archive} />
      <Route exact path={'/about'} component={About} />
      <Route exact path={'/link'} component={FriendLink} />
      <Redirect from='/*' to={'/'} />
    </Switch>
  </Router>
);


export default BasicRoute;