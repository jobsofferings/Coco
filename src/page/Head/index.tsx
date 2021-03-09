import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import TransitionGroup from 'react-addons-css-transition-group';
import Header from './Header/index'
import Footer from './Footer/index'
import Index from './Index/index';
import Archive from './Archive'
import Message from './Message';
import About from './About';
import Unknow from './Unknow';
import './index.less'

function Head() {
  
  const router = [
    {
      path: '/',
      component: Index
    },
    {
      path: '/archive',
      component: Archive
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/404',
      component: Unknow
    },
  ]

  return (
    <BrowserRouter >
      <div className="head">
        <Header />
        <div className="content">
          <TransitionGroup transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={1500}
            transitionName="sample">
            {router.map((item, index) => {
              return <Route key={index} exact path={item.path} component={item.component} />
            })}
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default Head