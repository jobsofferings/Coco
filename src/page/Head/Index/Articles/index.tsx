import React from 'react';
import { SEARCH, LOGO } from '../../../../svg';
import { Empty } from 'antd';
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
}

const ArticlesList = [{
  title: '使用 React hooks 转化 class 的一些思考',
  headImgSrc: 'http://www.jobsofferings.cn:4397/article1.jpg',
  summary: '从 class 组件移植 Hooks 的成本太高，不能像其他公司一样随心所欲地拥抱新技术，所以我们对于 Hooks 的讨论，应该考虑的比较全面，才能更好的了解这个技术，以及是否应该在项目中尝试这一新技术',
  author: '米卡',
  like: 6,
  read: 100,
  comment: 13,
  timer: 10000000,
  timeFormated: 'Nove 9, 2020'
}, {
  title: '使用 React hooks 转化 class 的一些思考',
  headImgSrc: 'http://www.jobsofferings.cn:4397/article2.jpg',
  summary: '从 class 组件移植 Hooks 的成本太高，不能像其他公司一样随心所欲地拥抱新技术，所以我们对于 Hooks 的讨论，应该考虑的比较全面，才能更好的了解这个技术，以及是否应该在项目中尝试这一新技术',
  author: '米卡',
  like: 6,
  read: 100,
  comment: 13,
  timer: 10000000,
  timeFormated: 'Nove 9, 2020'
}, {
  title: '使用 React hooks 转化 class 的一些思考',
  headImgSrc: 'https://static.jooger.me/img/source/20200404/vue-cli3_1585967248562.jpg?x-oss-process=style/watermark',
  summary: '从 class 组件移植 Hooks 的成本太高，不能像其他公司一样随心所欲地拥抱新技术，所以我们对于 Hooks 的讨论，应该考虑的比较全面，才能更好的了解这个技术，以及是否应该在项目中尝试这一新技术',
  author: '米卡',
  like: 6,
  read: 100,
  comment: 13,
  timer: 10000000,
  timeFormated: 'Nove 9, 2020'
}, {
  title: '使用 React hooks 转化 class 的一些思考',
  headImgSrc: 'https://static.jooger.me/img/source/20200404/vue-cli3_1585967248562.jpg?x-oss-process=style/watermark',
  summary: '从 class 组件移植 Hooks 的成本太高，不能像其他公司一样随心所欲地拥抱新技术，所以我们对于 Hooks 的讨论，应该考虑的比较全面，才能更好的了解这个技术，以及是否应该在项目中尝试这一新技术',
  author: '米卡',
  like: 6,
  read: 100,
  comment: 13,
  timer: 10000000,
  timeFormated: 'Nove 9, 2020'
}, {
  title: '使用 React hooks 转化 class 的一些思考',
  headImgSrc: 'https://static.jooger.me/img/source/20200404/vue-cli3_1585967248562.jpg?x-oss-process=style/watermark',
  summary: '从 class 组件移植 Hooks 的成本太高，不能像其他公司一样随心所欲地拥抱新技术，所以我们对于 Hooks 的讨论，应该考虑的比较全面，才能更好的了解这个技术，以及是否应该在项目中尝试这一新技术',
  author: '米卡',
  like: 6,
  read: 100,
  comment: 13,
  timer: 10000000,
  timeFormated: 'Nove 9, 2020'
}, {
  title: '使用 React hooks 转化 class 的一些思考',
  headImgSrc: 'https://static.jooger.me/img/source/20200404/vue-cli3_1585967248562.jpg?x-oss-process=style/watermark',
  summary: '从 class 组件移植 Hooks 的成本太高，不能像其他公司一样随心所欲地拥抱新技术，所以我们对于 Hooks 的讨论，应该考虑的比较全面，才能更好的了解这个技术，以及是否应该在项目中尝试这一新技术',
  author: '米卡',
  like: 6,
  read: 100,
  comment: 13,
  timer: 10000000,
  timeFormated: 'Nove 9, 2020'
}];

function Carousel() {

  const renderArticlesList = (item: articleItem, index: number) => {
    return (<div key={index}>
      <div className="articles-header">
        <div>
          <p>{item.title}</p>
        </div>
      </div>
      <div className="articles-content">
        <div className="articles-content-img-area">
          <img src={item.headImgSrc} alt={item.title} title={item.title} />
        </div>
        <div className="articles-content-summary-area">
          <p>{item.summary}</p>
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
            <p>{item.timeFormated}</p>
          </div>
        </div>
      </div>
    </div>)
  }

  return (
    <div className="articles">
      <div className="articles-area">
        {ArticlesList.length ? ArticlesList.map((item, index) => renderArticlesList(item, index)) : <Empty description="有东西不见了哦" />}
      </div>
      <div className="pinage">

      </div>
    </div>
  );
}

export default Carousel