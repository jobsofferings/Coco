import React from 'react';
import { StoreState } from '../store/types';
import MesContent from './MesContent';
import MesHeader from './MesHeader';
import './index.less'

function Archive(state: StoreState) {

  return (
    <div className="content-area" key="four">
      <MesHeader />
      <MesContent />
    </div>
  );
}

export default Archive;