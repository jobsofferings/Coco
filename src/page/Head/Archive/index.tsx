import React from 'react';
import Category from '../Category';
import Menu from '../Menu';
import TimeArchive from './TimeArchive';
import BaseContent from 'src/components/BaseContent';
import './index.less'

function TimeLine() {

  return (
    <div className="content-area">
      <div className="content-area-left">
        <TimeArchive />
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

export default BaseContent(TimeLine)