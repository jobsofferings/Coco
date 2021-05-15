import React from 'react';
import './index.less'

function AboutHeader() {

  return (
    <div className="about-header">
      <div className="about-header-area">
        <div className="my-headimg">
          <img src="http://www.jobsofferings.cn:4397/头像1.jpg" alt="" />
        </div>
        <div className="my-name">
          <p>Jobsofferings</p>
        </div>
        <div className="my-description">
          <p>Coco Developer, Hip Hop, Front End</p>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;