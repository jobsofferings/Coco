import React from 'react';
import MesContent from './MesContent';
import MesHeader from './MesHeader';
import './index.less'

function Archive() {

  return (
    <div className="content-area" key="four">
      <MesHeader />
      <MesContent />
    </div>
  );
}

export default Archive;