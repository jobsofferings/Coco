import React from 'react';
import {HashRouter, Route, Switch,BrowserRouter} from 'react-router-dom';
import Head from '../components/Head';
import Archive from '../components/Archive';
// import Header from '../components/Head/Header/index';


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Head}/>
            <Route exact path="/archive" component={Archive}/>
            {/* <Route path="/head/app" component={App}/> */}
            {/* <Head>
                <Route exact path="/app" component={App} />
            </Head> */}
            {/* <Route component={NoMatch} /> */}
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;