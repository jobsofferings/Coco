import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';

import './index.scss'
import MesContent from './MesContent';
import MesHeader from './MesHeader';

function Archive(state: StoreState) {

  return (
    <div className="content-area" key="four">
      <MesHeader />
      <MesContent />
    </div>
  );
}

export default Archive;