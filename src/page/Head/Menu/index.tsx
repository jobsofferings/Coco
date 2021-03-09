import React from 'react';
import { ARTICLE } from '../../../svg';
import { Empty } from 'antd';
import './index.less'

function Menu() {

  const starArticleList = [{
    title: '使用 React hooks 转化 class 的一些思考',
  }, {
    title: '从合并请求角度谈性能优化'
  }, {
    title: 'Redux在项目中的文件结构'
  }, {
    title: 'Redux的createStore实现'
  }, {
    title: 'React+wangeditor+node富文本处理带图片上传'
  }, {
    title: 'React＋Echarts简单的封装套路'
  }, {
    title: '给自己的博客添加一个侧边栏'
  }, {
    title: 'JS中map与forEach的区别'
  }, {
    title: '使用canvas制作五子棋游戏'
  }, {
    title: 'axios的Get和Post方法封装及Node后端接收数据'
  }];

  return (
    <div className="menu">
      <div className="menu-header">
        <ARTICLE />
        <div className="menu-title">明星文章</div>
      </div>
      <div className="menu-content">
        {starArticleList.length ? starArticleList.splice(0, 5).map((item, index) =>
          <div className="menu-article" key={index}>
            <div>{index + 1}</div>
            <p>{item.title}</p>
          </div>
        ) : <Empty description="有东西不见了哦" />}
      </div>
    </div>
  );
}

export default Menu