import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header/index'
import Footer from './Footer/index'
import Index from './Index/index';
import Archive from './Archive'
import Message from './Message';
import About from './About';
import Unknow from './Unknow';
import './index.less'

function Head() {
  return (
    <BrowserRouter >
      <div className="head">
        <Header />
        <div className="content">
          <Route exact path={'/'} component={Index} />
          <Route exact path={'/archive'} component={Archive} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/message'} component={Message} />
          <Route exact path={'/404'} component={Unknow} />
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default Head