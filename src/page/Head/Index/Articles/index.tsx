import React from 'react';
import { SEARCH, LOGO } from '../../../../svg';
import { Empty } from 'antd';
import { withRouter } from 'react-router-dom';
import { abstractFn } from 'src/function/myFun';
import './index.less'

export interface articleItem {
  title: string,
  headImgSrc: string,
  summary: string,
  author: string,
  like: number,
  read: number,
  comment: number,
  timer: number,
  timeFormated: string,
  id: number
}

const Carousel = ({ data, ...props }: any) => {

  const handleToDetail = (id: number) => {
    props.history.push('detail/' + id);
  }
  
  const renderArticlesList = (item: articleItem, index: number) => {
    const toDetail = () => handleToDetail(item.id);
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
            <p onClick={toDetail}>{abstractFn(item.summary)}</p>
          </div>
        </div>
        <div className="articles-meta">
          <div className="articles-meta-left">
            <div><LOGO /></div>
            <div>{item.author}</div>
            <div>{item.read} 次阅读</div>
            <div>{item.like} 人喜欢</div>
            <div>{item.comment} 条评论</div>
          </div>
          <div className="articles-meta-right">
            <div>
              <SEARCH />
              <p>Nove 9, 2020</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="articles">
      <div className="articles-area">
        {data.length ? data.map((item: any, index: number) => renderArticlesList(item, index)) : <Empty description="有东西不见了哦" />}
      </div>
      <div className="pinage">

      </div>
    </div>
  );
}

export default withRouter(Carousel)