import React from 'react';
import Category from '../Category';
import Menu from '../Menu';
import TimeArchive from './TimeArchive';
import './index.less'

const timelineData = [
  {
    year: 2020,
    monthList: [
      {
        month: 3,
        dayList: [
          {
            day: 4,
            link: 'www.baidu.com',
            title: '使用 React hooks 转化 class 的一些思考'
          },
          {
            day: 11,
            link: 'www.baidu.com',
            title: '使用 React hooks 转化 class 的一些思考'
          },
          {
            day: 23,
            link: 'www.baidu.com',
            title: '使用 React hooks 转化 class 的一些思考'
          },
        ]
      },
      {
        month: 4,
        dayList: [
          {
            day: 7,
            link: 'www.baidu.com',
            title: '使用 React hooks 转化 class 的一些思考'
          }
        ]
      }
    ]
  },
  {
    year: 2021,
    monthList: [
      {
        month: 5,
        dayList: [
          {
            day: 9,
            link: 'www.baidu.com',
            title: '使用 React hooks 转化 class 的一些思考'
          }
        ]
      }
    ]
  }
]

function Archive() {
  return (
    <div className="content-area">
      <div className="content-area-left">
        <TimeArchive timelineData={timelineData} />
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

export default Archive