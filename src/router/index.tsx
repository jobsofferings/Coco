import React from 'react';
import {HashRouter, Route, Switch,BrowserRouter} from 'react-router-dom';
import Head from '../components/Head';
import Archive from '../components/Head/Archive';
import Index from '../components/Head/Index/index';
// import Header from '../components/Head/Header/index';


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Head}/>
            {/* <Route path="/head" component={Index}/>
            <Route path="/Archive" component={Archive}/> */}
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;