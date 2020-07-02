import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../../store/types';
import * as actions from '../../store/actions';
import Masonry from 'react-masonry-component';
import { Tooltip, message } from 'antd';

import './index.scss'
import { LIKE } from '../../../../svg';

function MesContent(state: StoreState) {

    const handleLike = () => {
        message.info('当前功能未开发');
    }

    return (
        <div className="archive-content-area">
            <div className="archive-content">
                <Masonry
                    elementType={'ul'}
                    options={{ transitionDuration: 5 }}
                >
                    {state.messageList.map((item, index) => {
                        return <li key={index} className="archive-item">
                            {/* 注意，这里允许点击跳转友链 */}
                            <div className="archive-item-header">
                                <div>
                                    <img src={item.imgSrc} alt="" />
                                </div>
                                <Tooltip title='去TA的主页看看'>
                                    <p>{item.username}</p>
                                </Tooltip >
                            </div>
                            <div className="archive-item-content">
                                <p>{item.messageContent}</p>
                            </div>
                            <div className="archive-item-footer">
                                <div className="archive-item-footer-left">
                                    <LIKE className={item.active ? 'like-active' : ''} onClick={handleLike} />
                                    <p>{item.like}</p>
                                </div>
                                <div className="archive-item-footer-right">
                                    <p>{item.timeFormated}</p>
                                </div>
                            </div>
                        </li>
                    })}
                </Masonry>
            </div>
        </div>
    );
}

export function mapStateToProps(state: propsState) {
    return { messageList: state.head.messageList }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MesContent));