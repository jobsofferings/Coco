import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Head from '../page/Head';
import LoginSign from '../page/LoginSign';
import Unknow from '../page/Head/Unknow';
// import Archive from '../components/Head/Archive';
// import Index from '../components/Head/Index/index';
// import Header from '../components/Head/Header/index';


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginSign} />
            <Route exact path="/" component={Head} />
            <Route exact path="/404" component={Unknow} />
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;