import React from 'react';
import Menu from '../Menu';
import Category from '../Category';
import { Spin } from 'antd';
import BaseContent from 'src/components/BaseContent';
import './index.less'

function ArticleDetail() {

  return (
    <div className="content-area" key="one">
      <div className="content-area-left">
        <Spin spinning={false}>
          123
        </Spin>
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

export default BaseContent(ArticleDetail);
