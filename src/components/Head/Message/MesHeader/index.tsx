import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../../store/types';
import * as actions from '../../store/actions';

import './index.scss'
import { QUOTES_DOWN, QUOTES_UP } from '../../../../svg';
import { message } from 'antd';

function MesHeader(state: StoreState) {

  const handleSubmit = () => {
    message.info('当前功能未开发');
  }

  return (
    <div className="archive-header-area">
      <div className="archive-header">
        <div className="archive-header-topic">
          <div>
            <QUOTES_UP />
          </div>
          <div>
            <p>人的平均寿命77岁，一共28105天，67w小时，4047w分钟，24亿秒左右，这10秒你在读这段话，这10秒你属于我。你好陌生人，我爱你</p>
          </div>
          <div>
            <QUOTES_DOWN />
          </div>
        </div>
        <div className="archive-header-submit">
          <button onClick={handleSubmit}>留下足迹</button>
        </div>
        <div className="archive-header-num">
          <p>已有 40 条留言</p>
        </div>
      </div>
    </div>
  );
}

export function mapStateToProps(state: propsState) {
  return { ...state.head }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MesHeader));