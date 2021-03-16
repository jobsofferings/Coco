import React from 'react';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import BaseContent from 'src/components/BaseContent';
import './index.less'

function Archive() {

  return (
    <div className="content-area" key="three">
      <AboutHeader />
      <AboutContent />
    </div>
  );
}

export default BaseContent(Archive);