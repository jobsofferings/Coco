import React from 'react';
import Menu from '../Menu';
import Category from '../Category';
import { Spin } from 'antd';
import BaseContent from 'src/components/BaseContent';
import ArticleDetailContent from './ArticleDetailContent';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {

  const { id = '' } = useParams<OPUtils.RouterParams>()

  return (
    <div className="content-area" key="one">
      <div className="content-area-left">
        <Spin spinning={false}>
          <ArticleDetailContent id={id} />
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
