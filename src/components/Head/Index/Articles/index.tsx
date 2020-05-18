import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState, articleItem } from '../../store/types';
import * as actions from '../../store/actions';

import './index.scss'
import { SEARCH, LOGO } from '../../../../svg';
import { Empty } from 'antd';

function Carousel(state: StoreState) {

    const renderArticlesList = (item: articleItem, index: number) => {
        return (<div key={index}>
            <div className="articles-header">
                <div>
                    <p>{item.title}</p>
                </div>
            </div>
            <div className="articles-content">
                <div className="articles-content-img-area">
                    <img src={item.headImgSrc} alt={item.title} title={item.title}/>
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
                {state.ArticlesList.map((item, index) => renderArticlesList(item, index))}
                <Empty />
            </div>
            <div className="pinage">

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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Carousel));