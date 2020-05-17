import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from './store/types';
import * as actions from './store/actions';

import './index.scss'
import Header from './Header/index'
import Footer from './Footer/index'
import Index from './Index/index';
import Archive from './Archive'
import { Route, BrowserRouter } from 'react-router-dom';

function Head(state: StoreState) {

  return (
    <BrowserRouter >
      <div className="head">
        <Header />
        <div className="content">
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