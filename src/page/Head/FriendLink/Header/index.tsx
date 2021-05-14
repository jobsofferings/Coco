import React from 'react';
import { ReactComponent as QUOTES_DOWN } from 'src/assert/quotesDown.svg'
import { ReactComponent as QUOTES_UP } from 'src/assert/quotesUp.svg'
import { handleSubmit } from 'src/function/myFun';
import './index.less'

interface HeaderProps {
  total: number
}

const Header = ({ total }: HeaderProps) => {

  return (
    <div className="archive-header-area">
      <div className="archive-header">
        <div className="archive-header-topic">
          <div>
            <QUOTES_UP />
          </div>
          <div>
            <p>人的平均寿命77岁，一共28105天，67w小时，4047w分钟，24亿秒左右，这10秒你在读这段话，这10秒你属于我。</p>
          </div>
          <div>
            <QUOTES_DOWN />
          </div>
        </div>
        <div className="archive-header-submit">
          <button onClick={handleSubmit}>给我留言</button>
        </div>
        <div className="archive-header-num">
          <p>已有 {total} 个友链</p>
        </div>
      </div>
    </div>
  );
}

export default Header