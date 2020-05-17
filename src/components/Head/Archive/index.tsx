import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';

import './index.scss'

function Archive(state: StoreState) {

  return (
    <div className="content">
      <div className="content-area">
        1111111111111111111111111111111
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Archive));