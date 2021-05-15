import React from 'react';
import { Map, Marker } from 'react-amap';
import CocoIcon from 'src/components/WhaleIcon';
import './index.less'

function AboutContent() {

  const AMAP_KEY = 'a77ae728df8f8c954d77c202ae0c0a94';

  const descriptionList = [{
    componentSvg: <CocoIcon type='icon-me' />,
    description: '赶上了90末班车的99后的米卡，笔名Jobsofferings，前端，目前在杭州，喜欢自由的生活，未知的东西是自己的兴趣来源，最爱音乐。'
  }, {
    componentSvg: <CocoIcon type='icon-like' />,
    description: '音乐，Coding，长跑，小说，犯傻'
  }, {
    componentSvg: <CocoIcon type='icon-tool' />,
    description: 'React，Node，Vue，TypeScript'
  }, {
    componentSvg: <CocoIcon type='icon-position' />,
    description: '杭州黄龙万科中心H座'
  }, {
    componentSvg: <CocoIcon type='icon-company' />,
    description: '杭州帷幄匠心'
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
          <Map amapkey={AMAP_KEY} center={{ longitude: 120.126389, latitude: 30.275093 }} >
            <Marker animation="AMAP_ANIMATION_BOUNCE" icon="http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png" />
          </Map>
        </div>
      </div>
    </div>
  );
}

export default AboutContent