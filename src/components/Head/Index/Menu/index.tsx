import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../../store/types';
import * as actions from '../../store/actions';

import './index.scss'
import { ARTICLE } from '../../../../svg';
import { Empty } from 'antd';

function Menu(state: StoreState) {

    return (
        <div className="menu">
            <div className="menu-header">
                <ARTICLE />
                <div className="menu-title">明星文章</div>
            </div>
            <div className="menu-content">
                {state.starArticleList.length ? state.starArticleList.splice(0, 5).map((item, index) =>
                    <div className="menu-article" key={index}>
                        <div>{index + 1}</div>
                        <p>{item.title}</p>
                    </div>
                ) : <Empty description="有东西不见了哦"/>}
            </div>
        </div>
    );
}

export function mapStateToProps(state: propsState) {
    return { ...state.head }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
    return {
        changeInputValue(val: string) {
            dispatch(actions.inChangeInputValue(val));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Menu));