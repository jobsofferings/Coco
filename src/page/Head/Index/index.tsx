import React from 'react';
import Carousel from './Carousel';
import Articles, { articleItem } from './Articles';
import Menu from '../Menu';
import Category from '../Category';
import { useRequest } from 'ahooks';
import { axiosPost } from 'src/function/axios';
import { Spin } from 'antd';
import './index.less'

interface GetArticleProps {
  offset: 0,
  limit: 10
}

const getArticle = (props: GetArticleProps) => {
  return new Promise((resolve) => {
    axiosPost('/article', props).then(res => {
      resolve(res);
    })
  })
}

function Index() {

  /**
 * 建议封装一下useBaseRequest, data在外层导出，type限制(考虑)
 **/
  const { data, loading } = useRequest<{ data: articleItem[] }>(() => getArticle({
    offset: 0,
    limit: 10
  }));

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

export default Index;
