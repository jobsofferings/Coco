import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';

import './index.scss'
import { LOGO, CLOSE, SEARCH } from '../../../svg'
import { Link } from 'react-router-dom';

function Header(state: StoreState) {

    /**
     * inputValue绑定函数
     **/
    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        state.changeInputValue(inputValue);
    }

    /**
     * 清除inputValue
     **/
    const handleClearInput = () => {
        state.changeInputValue('');
    }

    /**
     * 根据inputValue查询文章
     **/
    const handleSearch = () => {
        console.log('根据inputValue查询文章');
    }

    /**
     * 键盘监听事件
     **/
    const handlePress = (event: React.KeyboardEvent) => {
        if (event.charCode === 13) {
            handleSearch()
        }
    }

    /**
     * 渲染顶部导航栏
     **/
    const renderNav = () => {
        const navList = [{
            title: '首页',
            href: '/'
        }, {
            title: '归档',
            href: '/archive'
        }, {
            title: '关于',
            href: '/archive'
        }, {
            title: '留言区',
            href: '/archive'
        }]
        return (
            <ul>
                {navList.map((item, index) => <li key={index}>
                    <Link to={item.href}><span>{item.title}</span></Link>
                </li>)}
            </ul>
        );
    }
    return (
        <div className="header">
            <div className="nav">
                <div className="logo">
                    <LOGO />
                </div>
                <div className="list">
                    {renderNav()}
                </div>
                <div className="search">
                    <CLOSE className={`search-close ${!state.inputValue.length ? 'hide' : ''}`} onClick={handleClearInput} />
                    <input value={state.inputValue} onKeyPress={handlePress} onChange={handelChange} type="text" placeholder="搜索文章" />
                    <div className="search-icon" onClick={handleSearch}>
                        <SEARCH className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function mapStateToProps(state: propsState) {
    return { ...state.archive }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ArchiveAction>) {
    return {
        changeInputValue(val: string) {
            dispatch(actions.inChangeInputValue(val));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header));