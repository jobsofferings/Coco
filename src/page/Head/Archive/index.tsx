import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';
import Category from '../Category';
import Menu from '../Menu';
import TimeArchive from './TimeArchive';

function Archive(state: StoreState) {
  const { timelineData } = state;
  return (
    <div className="content-area">
      <div className="content-area-left">
        <TimeArchive timelineData={timelineData} />
      </div>
      <div className="content-area-right">
        <div className="content-area-right-fixed">
          <Category />
          <Menu />
        </div>
      </div>
    </div>
  );
}

export function mapStateToProps(state: propsState) {
  return {
    timelineData: state.head.timelineData
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Archive));