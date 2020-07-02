import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Input, Form, Button } from 'antd';
import { StoreState, propsState } from './store/types';
import * as actions from './store/actions';
import { post } from '../../function/server';

import './index.scss'
import { Store } from 'antd/lib/form/interface';
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 10 },
};

function LoginSign(state: StoreState) {

    const [form] = Form.useForm();
    const btn = React.useRef();
    const [isLogin, setIsLogin] = React.useState(true)

    const handleChangeLS = () => {
        setIsLogin(!isLogin);
    }

    const handleLogin = (val: Store) => {
        console.log(val);
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
                            <div className='login-or-sign-title'>登录</div>
                            <Form {...layout} form={form} onFinish={handleLogin}>
                                <Form.Item name='username' label='用户名' rules={[{ required: true, message: '请输入用户名' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name='password' label='密码' rules={[{ required: true, message: '请输入密码' }]}>
                                    <Input type="password" />
                                </Form.Item>
                                <Button style={{ display: 'none' }} type="primary" htmlType="submit">
                                    登录
                                </Button>
                                <div className='login-btn' onClick={() => {
                                    post('http://127.0.0.1', { a: 1 }, {});
                                }}>登录</div>
                            </Form>
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