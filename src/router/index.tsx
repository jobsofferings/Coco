import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { PATH_ROOT, PATH_LOGIN, PATH_SEARCH, PATH_DETAIL, PATH_ARCHIVE, PATH_ABOUT, PATH_LINK } from './config';
import About from 'src/page/Head/About';
import Archive from 'src/page/Head/Archive';
import ArticleDetail from 'src/page/Head/ArticleDetail';
import Index from 'src/page/Head/Index/index';
import FriendLink from 'src/page/Head/FriendLink';
import Login from 'src/page/Login';

const history = createBrowserHistory();

const BasicRoute = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={PATH_ROOT} component={() => <Index key='1' />} />
      <Route exact path={PATH_LOGIN} component={Login} />
      <Route exact path={`${PATH_SEARCH}/:id`} component={() => <Index key='2' />} />
      <Route exact path={`${PATH_DETAIL}/:id`} component={ArticleDetail} />
      <Route exact path={PATH_ARCHIVE} component={Archive} />
      <Route exact path={PATH_ABOUT} component={About} />
      <Route exact path={PATH_LINK} component={FriendLink} />
      <Redirect from='/*' to={'/'} />
    </Switch>
  </Router>
);


export default BasicRoute;