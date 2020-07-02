import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from './store/types';
import * as actions from './store/actions';
import { Route, BrowserRouter } from 'react-router-dom';
// import ReactCSSTransitionGroup  from 'react-transition-group' 
import TransitionGroup from 'react-addons-css-transition-group';

import './index.scss'
import Header from './Header/index'
import Footer from './Footer/index'
import Index from './Index/index';
import Archive from './Archive'
import Message from './Message';
import About from './About';
import Unknow from './Unknow';

function Head(state: StoreState) {
  
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

export function mapStateToProps(state: propsState) {
  return { ...state.head }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Head));