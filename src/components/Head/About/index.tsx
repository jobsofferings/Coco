import * as React from 'react';

import './index.scss'
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';

function Archive() {

  const AMAP_KEY = 'a77ae728df8f8c954d77c202ae0c0a94';

  return (
    <div className="content-area" key="three">
      {/* <div id="map" style={{ width: 600, height: 400 }}>
        <Map amapkey={AMAP_KEY} center={{ longitude: 120, latitude: 30 }}/>
      </div> */}
      <AboutHeader />
      <AboutContent />
    </div>
  );
}

export default Archive;