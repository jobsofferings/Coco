import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Head from '../components/Head';
import LoginSign from '../components/LoginSign';
import Unknow from '../components/Head/Unknow';
// import Archive from '../components/Head/Archive';
// import Index from '../components/Head/Index/index';
// import Header from '../components/Head/Header/index';


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginSign} />
            <Route exact path="/" component={Head} />
            <Route exact path="/*" component={Unknow} />
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;