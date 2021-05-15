import React from 'react';
import { Empty, Spin } from 'antd';
import { starArticles } from 'src/fetch';
import useBaseQuery from 'src/hooks/useBaseQuery';
import { articleItem } from '../Index/Articles';
import { withRouter } from 'react-router';
import { PATH_DETAIL } from 'src/router/config';
import CocoIcon from 'src/components/WhaleIcon';
import './index.less'

const Menu = (props: any) => {

  const { data: { data }, loading } = useBaseQuery({
    query: '/starArticles',
    queryFn: () => starArticles({}),
  })

  const handleToDetail = (id: number) => {
    props.history.push(`${PATH_DETAIL}/${id}`);
  }

  const renderStarArticle = (data: articleItem[] = []) => {
    return data.length ? data.map((item, index) => (
      <div className="menu-article" key={index}>
        <div>{index + 1}</div>
        <p onClick={() => handleToDetail(item.id)}>{item.title}</p>
      </div>
    )) :
      <Empty description="有东西不见了哦" />
  }

  return (
    <div className="menu">
      <div className="menu-header">
        <CocoIcon type='icon-article' />
        <div className="menu-title">明星文章</div>
      </div>
      <div className="menu-content">
        <Spin spinning={loading}>
          {renderStarArticle(data)}
        </Spin>
      </div>
    </div>
  );
}

export default withRouter(Menu)