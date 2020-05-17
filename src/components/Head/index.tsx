import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from './store/types';
import * as actions from './store/actions';
import { Route, BrowserRouter } from 'react-router-dom';

import './index.scss'
import Header from './Header/index'
import Footer from './Footer/index'
import Index from './Index/index';
import Archive from './Archive'
import Message from './Message';
import About from './About';

function Head(state: StoreState) {

  return (
    <BrowserRouter >
      <div className="head">
        <Header />
        <div className="content">
          <Route exact path="/message" component={Message} />
          <Route exact path="/about" component={About} />
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/" component={Index} />
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