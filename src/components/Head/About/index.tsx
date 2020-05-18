import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';
import { Map } from 'react-amap';

import './index.scss'

function Archive(state: StoreState) {

  const AMAP_KEY = 'a77ae728df8f8c954d77c202ae0c0a94';

  React.useEffect(() => {

  })

  return (
    <div className="content-area" key="three">
      {/* <div id="map" style={{ width: 600, height: 400 }}>
        <Map amapkey={AMAP_KEY} center={{ longitude: 120, latitude: 30 }}/>
      </div> */}
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