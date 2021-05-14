import React from 'react';
import { Tooltip } from 'antd';
import './index.less'

interface ContentProps {
  data: FriendLinkItem[]
}

interface FriendLinkItem {
  icon: string
  name: string
  description: string
  timer: string
  link: string
}

const Content = ({ data }: ContentProps) => {

  const handleToFriendLink = (link: string) => window.open(link)

  return (
    <div className="archive-content-area">
      <div className="archive-content">
        <div className="masonry">
          {data.map(({ icon, link, description, name }, index) => (
            <li key={index} onClick={() => handleToFriendLink(link)} className="archive-item item">
              <div className="archive-item-header">
                <div>
                  <img src={icon} alt={name} />
                </div>
                <Tooltip title='去TA的主页看看'>
                  <p>{name}</p>
                </Tooltip >
              </div>
              <div className="archive-item-content">
                <p>{description}</p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content