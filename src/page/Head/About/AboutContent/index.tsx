import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../../store/types';
import * as actions from '../../store/actions';
import { Map, Marker } from 'react-amap';

import './index.scss'
import { ME, TOOL, POSITION, COMPANY, LIKE } from '../../../../svg';

function AboutContent(state: StoreState) {

  const AMAP_KEY = 'a77ae728df8f8c954d77c202ae0c0a94';

  const descriptionList = [{
    componentSvg: <ME />,
    description: '赶上了90末班车的99后的米卡，笔名Jobsofferings，喜欢追寻新技术，轻微的代码洁癖，目前在杭州，喜欢自由的生活，未知的东西是自己的兴趣来源，最爱音乐。'
  }, {
    componentSvg: <LIKE />,
    description: '音乐，音乐，音乐，Coding，长跑，小说'

  }, {
    componentSvg: <TOOL />,
    description: 'React，Node，Vue，JavaScript...'

  }, {
    componentSvg: <POSITION />,
    description: '杭州创新创业园'

  }, {
    componentSvg: <COMPANY />,
    description: '杭州袋鼠云'
  }];

  return (
    <div className="about-content">
      <div className="about-content-left">
        <div className="about-my-description">
          <div className="description-header">
            <p>It's me</p>
          </div>
          <div className="description-content">
            {descriptionList.map((item, index) => {
              return <div className="description-item" key={index}>
                <div>
                  {item.componentSvg}
                </div>
                <p>{item.description}</p>
              </div>
            })}
          </div>
        </div>
        <div className="about-my-friends">
          <div></div>
        </div>
      </div>
      <div className="about-content-right">
        <div className="about-my-contacts">
          <div className="contacts-header">
            <p>Contacts</p>
          </div>
          <div className="contacts-content">
            {/* <div>
                            <GithubOutlined />
                        </div>
                        <div>
                            <JUE_JIN />
                        </div> */}
          </div>
        </div>
        <div className="about-my-posi">
          <div className="posi-header">
            <p>I'm here</p>
          </div>
          <Map amapkey={AMAP_KEY} center={{ longitude: 120, latitude: 30 }} >
            <Marker animation="AMAP_ANIMATION_BOUNCE" icon="http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png" />
          </Map>
        </div>
      </div>
    </div>
  );
}

export function mapStateToProps(state: propsState) {
  return {}
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AboutContent));