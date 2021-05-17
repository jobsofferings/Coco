import React, { useState } from 'react'
import { message } from 'antd'
import classNames from 'classnames'
import { useMutation } from 'react-query'
import { withRouter } from 'react-router'
import { PATH_ROOT } from 'src/router/config'
import { login, sign } from 'src/fetch'
import './index.less'

interface LoginProps {
  username: string
  password: string
}

interface SignProps {
  nickname: string
  username: string
  password: string
}

export interface User {
  username?: string
  email?: string
  authority?: string
}

export const Authority = {
  ADMIN: 'admin',
  PRIMARY: 'primary',
}

const defaultLogin: LoginProps = {
  username: '',
  password: '',
}

const defaultSign: SignProps = {
  nickname: '',
  password: '',
  username: '',
}

const Login = (props: any) => {
  const [isShowLogin, setIsShowLogin] = useState(false)
  const [isShowSign, setIsShowSign] = useState(true)

  const [loginParams, setLoginParams] = useState<LoginProps>(defaultLogin)
  const [signParams, setSignParams] = useState<SignProps>(defaultSign)

  const { mutate: loginFetch } = useMutation<any>(
    ['login', loginParams],
    () => login(loginParams),
    {
      onSuccess: ({ data }) => {
        const { flag, msg } = data
        if (!flag) {
          message.error(msg)
          setLoginParams(defaultLogin)
        } else {
          message.success('登录成功')
          afterSuccess()
        }
      },
    },
  )

  const { mutate: signFetch } = useMutation<any>(
    ['sign', signParams],
    () => sign(signParams),
    {
      onSuccess: ({ data }) => {
        const { flag, msg } = data
        if (!flag) {
          message.error(msg)
          setSignParams(defaultSign)
        } else {
          message.success('注册成功')
          afterSuccess()
        }
      },
    },
  )

  const afterSuccess = () => {
    props.history.push(PATH_ROOT)
  }

  const handleSlideSign = () => {
    setIsShowSign(!isShowSign)
    setIsShowLogin(false)
  }

  const handleSlideLogin = () => {
    setIsShowLogin(!isShowLogin)
    setIsShowSign(false)
  }

  const handleLogin = () => {
    if (checkLogin()) {
      loginFetch()
    }
  }

  const handleSign = () => {
    if (checkSign()) {
      signFetch()
    }
  }

  const checkLogin = () => {
    const { username, password } = loginParams
    return checkUserName(username) && checkPassword(password)
  }

  const checkSign = () => {
    const { username, password, nickname } = signParams
    return checkUserName(username) && checkPassword(password) && checkNickname(nickname)
  }

  const checkUserName = (str: string) => {
    var p = /^\d\d{10}$/;
    const res = p.test(str);
    if(!res) message.error('用户名为11位数字')
    return res;
  }

  const checkPassword = (str: string) => {
    var p = /^[A-Za-z]{1}[A-Za-z0-9_-]{7,15}$/;
    const res = p.test(str);
    if(!res) message.error('密码以字母开头，只能包含字母数字下划线和减号，8到16位字符')
    return p.test(str);
  }

  const checkNickname = (str: string) => {
    var p = /^[\u4e00-\u9fa5A-Za-z0-9-_]*$/;
    const res = p.test(str);
    if(!res) message.error('不合法昵称!')
    return p.test(str);
  }

  const handleChangeSignParams: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setSignParams({
      ...signParams,
      [name]: value,
    })
  }

  const handleChangeLoginParams: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setLoginParams({
      ...loginParams,
      [name]: value,
    })
  }

  return (
    <div className="login-sign-area">
      <div className="form-structor">
        <div className={classNames('signup', { 'slide-up': !isShowSign })}>
          <h2 className="form-title" onClick={handleSlideSign}>
            <span>或</span>
            <p>注册</p>
          </h2>
          <div className="form-holder">
            <input
              type="nickname"
              name="nickname"
              className="input"
              placeholder="昵称"
              value={signParams.nickname}
              onChange={handleChangeSignParams}
            />
            <input
              type="text"
              name="username"
              className="input"
              placeholder="用户名"
              value={signParams.username}
              onChange={handleChangeSignParams}
            />
            <input
              type="password"
              name="password"
              className="input"
              placeholder="密码"
              value={signParams.password}
              onChange={handleChangeSignParams}
            />
          </div>
          <button onClick={handleSign} className="submit-btn">
            注册
          </button>
        </div>
        <div className={classNames('login', { 'slide-up': !isShowLogin })}>
          <div className="center">
            <h2 className="form-title" onClick={handleSlideLogin}>
              <span>或</span>
              <p>登录</p>
            </h2>
            <div className="form-holder">
              <input
                type="username"
                name="username"
                placeholder="用户名"
                value={loginParams.username}
                onChange={handleChangeLoginParams}
              />
              <input
                type="password"
                name="password"
                placeholder="密码"
                value={loginParams.password}
                onChange={handleChangeLoginParams}
              />
            </div>
            <button onClick={handleLogin} className="submit-btn">
              登录
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)
