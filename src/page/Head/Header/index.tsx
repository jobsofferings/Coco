import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';

import './index.scss'
import { LOGO, CLOSE, SEARCH } from '../../../svg'
import { Link, withRouter } from 'react-router-dom';

function Header(state: StoreState) {

    const pathname = state.history.location.pathname;

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
     * 路由变化
     **/
    const handleChangerouter = (navIndex: number) => {
        state.changeRouter(navIndex);
    }

    /**
     * 渲染顶部导航栏
     **/
    const renderNav = () => {
        console.log(state.navIndex);
        const spanStyle = { left: `${state.navIndex * 52 + 10}px`, width: `${state.navIndex ? (state.navIndex !== 3 ? 32 : 48) : 0}px` };
        return (
            <ul>
                {state.navList.map((item, index) => <Link to={item.href} key={index}>
                    <li onClick={() => { handleChangerouter(index) }}>
                        <span className={state.navIndex === index ? 'nav-active' : ''}>{item.title}</span>
                    </li>
                </Link>)}
                <span style={spanStyle}></span>
            </ul>
        );
    }

    React.useEffect(() => {
        state.navList.map((item, index) => {
            if (item.href === pathname) {
                state.changeRouter(index);
            }
        })
    }, [])

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
                    <input value={state.inputValue} onKeyPress={handlePress} onChange={handelChange} type="text" placeholder="搜索文章12345678910" />
                    <div className="search-icon" onClick={handleSearch}>
                        <SEARCH className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function mapStateToProps(state: propsState) {
    return {
        navIndex: state.head.navIndex,
        navList: state.head.navList,
        inputValue: state.head.inputValue,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
    return {
        changeInputValue(val: string) {
            dispatch(actions.inChangeInputValue(val));
        },
        changeRouter(navIndex: string) {
            dispatch(actions.inChangeRouter(navIndex));
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(React.memo(Header)));