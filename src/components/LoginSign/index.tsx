import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from './store/types';
import * as actions from './store/actions';

import './index.scss'

function LoginSign(state: StoreState) {

    const [isLogin, setIsLogin] = React.useState(true)

    const handleChangeLS = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className="login">
            <div className="login-content">
                <div className="login-content-form-area">
                    <div className={`${isLogin ? 'login-content-img-mask' : 'login-content-img-mask login-content-img-mask-active'}`}>
                        <div className="login-content-img-area">
                            <div>
                                <p>{`${isLogin ? '还未注册?' : '已有帐号？'}`}</p>
                                <p>{`${isLogin ? '立即注册，快来体验更多!' : '有帐号就登录吧，好久不见了！'}`}</p>
                            </div>
                            <div>
                                <button onClick={handleChangeLS}>
                                    <p>注册</p>
                                    <p>登录</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="login-or-sign-area">
                        <div className="login-area">
                            
                        </div>
                        <div className="sign-area"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function mapStateToProps(state: propsState) {
    return { ...state.loginSign }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.LoginSignAction>) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(LoginSign));