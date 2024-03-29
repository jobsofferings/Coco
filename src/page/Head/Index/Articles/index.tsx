import React from 'react';
import { Empty, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { abstractFn, getMonthEng } from 'src/function/myFun';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoadingOutlined } from '@ant-design/icons';
import { PATH_DETAIL } from 'src/router/config';
import CocoIcon from 'src/components/WhaleIcon';
import './index.less'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export interface articleItem {
  title: string,
  headImgSrc: string,
  summary: string,
  briefContent: string,
  author: string,
  like: number,
  read: number,
  comment: number,
  timer: string,
  timeFormated: string,
  id: number
}

const Articles = ({ data, getMore, total = 0, ...props }: any) => {

  const handleToDetail = (id: number) => {
    props.history.push(`${PATH_DETAIL}/${id}`);
  }

  const renderArticlesList = (item: articleItem, index: number) => {
    const toDetail = () => handleToDetail(item.id);
    const timer = new Date(parseInt(item.timer));
    return (
      <div key={index}>
        <div className="articles-header">
          <div>
            <p onClick={toDetail}>{item.title}</p>
          </div>
        </div>
        <div className="articles-content">
          {item.headImgSrc && <div className="articles-content-img-area">
            <img src={item.headImgSrc} onClick={toDetail} alt={item.title} title={item.title} />
          </div>}
          <div className="articles-content-summary-area">
            <p onClick={toDetail}>{abstractFn(item.briefContent)}</p>
          </div>
        </div>
        <div className="articles-meta">
          <div className="articles-meta-left">
            <div><CocoIcon type='icon-logo' /></div>
            <div>{item.author}</div>
            <div>{item.read} 次阅读</div>
            <div>{item.like} 人喜欢</div>
            {/* <div>{item.comment} 条评论</div> */}
          </div>
          <div className="articles-meta-right">
            <div>
              <CocoIcon type='icon-search' />
              <p>{`${getMonthEng(timer.getMonth() + 1)} ${timer.getDate()}, ${timer.getFullYear()}`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderLoader = (data: any[]) => {
    return (data.length && data.length < total) ?
      <div className="loader" key={0}>
        <span>Loading ...</span>
        <Spin indicator={antIcon} size='small' />
      </div> :
      null
  }

  const renderLoaderEnd = (data: any[]) => {
    return (data.length && data.length >= total) ?
      <div className="loader-end" key={0}>
        <span>已经没有了哦</span>
      </div> :
      null
  }

  return (
    <div className="articles">
      <div className="articles-area">
        <InfiniteScroll
          className="list-contents"
          dataLength={total}
          next={getMore}
          loader={renderLoader(data)}
          hasMore={data.length < total}
          endMessage={renderLoaderEnd(data)}
        >
          {data.length ? data.map((item: any, index: number) => renderArticlesList(item, index)) : <Empty description="有东西不见了哦" />}
        </InfiniteScroll>
      </div>
      <div className="pinage">

      </div>
    </div>
  );
}

export default withRouter(Articles)