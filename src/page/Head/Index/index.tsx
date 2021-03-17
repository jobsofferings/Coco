import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';
import Articles from './Articles';
import Menu from '../Menu';
import Category from '../Category';
import { Spin } from 'antd';
import BaseContent from 'src/components/BaseContent';
import { getArticle } from 'src/fetch';
import useBaseQuery from 'src/hooks/useBaseQuery';
import { PAGE_LIMIT } from 'src/config';
import './index.less'

const Index = () => {

  const { id: key = '' } = useParams<OPUtils.RouterParams>()

  const { data, loading } = useBaseQuery({
    query: '/article',
    queryFn: () => getArticle({
      offset: 0,
      limit: PAGE_LIMIT,
      key,
    })
  })

  return (
    <div className="content-area" key="one">
      <div className="content-area-left">
        <Carousel />
        <Spin spinning={loading}>
          <Articles data={data?.data || []} />
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

export default BaseContent(Index);
