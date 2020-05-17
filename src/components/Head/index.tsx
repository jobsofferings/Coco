import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from './store/types';
import * as actions from './store/actions';

import './index.scss'
import Header from './Header/index'
import Footer from './Footer/index'
import Carousel from './Carousel/index'
import Menu from './Menu';
import Articles from './Articles';
import Category from './Category';

function Head(state: StoreState) {
console.log(state);
  /**
   * 浏览器大小改变监听
   **/
  const resize: () => void = () => {
    let wHeight = document.documentElement.clientHeight || document.body.clientHeight;
  }

  React.useEffect(() => {
    resize();
  }, [])

  React.useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="head">
      <Header />
      <div className="content">
        <div className="content-area">
          <div className="content-area-left">
            <Carousel />
            <Articles />
          </div>
          <div className="content-area-right">
            <Menu />
            <Category />
          </div>
        </div>
      </div>
      <Footer />
    </div>
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