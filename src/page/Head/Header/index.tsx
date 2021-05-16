import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from 'src/page/Head/Header/Search';
import CocoIcon from 'src/components/WhaleIcon';
import { PATH_ABOUT, PATH_ARCHIVE, PATH_LINK, PATH_LOGIN, PATH_ROOT } from 'src/router/config';
import { message, Row } from 'antd';
import { clearAllCookie, getCookie } from 'src/function/myFun';
import './index.less'

const navList = [{
  title: '首页',
  href: PATH_ROOT
}, {
  title: '归档',
  href: PATH_ARCHIVE
}, {
  title: '关于',
  href: PATH_ABOUT
}, {
  title: '友链',
  href: PATH_LINK
}];

const Header = (props: any) => {

  const [navIndex, setNavIndex] = useState(0);
  const [nickname, setNickname] = useState(decodeURI(getCookie('nickname')));
  const [username, setUsername] = useState(getCookie('username'));

  const pathname = props.history.location.pathname;

  const handleChangerouter = (navIndex: number) => setNavIndex(navIndex)

  const renderNav = () => {
    const spanStyle = { left: `${navIndex * 52 + 10}px`, width: `${navIndex ? 32 : 0}px` };
    return (
      <ul>
        {navList.map((item, index) => <Link to={item.href} key={index}>
          <li onClick={() => { handleChangerouter(index) }}>
            <span className={navIndex === index ? 'nav-active' : ''}>{item.title}</span>
          </li>
        </Link>)}
        <span style={spanStyle}></span>
      </ul>
    );
  }

  React.useEffect(() => {
    navList.map((item, index) => {
      if (item.href === pathname) {
        setNavIndex(index);
      }
    })
  }, [])

  const handleToLogin = () => {
    setTimeout(() => {
      props.history.push(PATH_LOGIN)
    }, 300)
  }

  const handleToLogout = () => {
    message.success(`用户：${nickname} 注销成功`)
    setTimeout(() => {
      clearAll()
      props.history.push(PATH_ROOT)
    }, 300)
  }

  const clearAll = () => {
    clearAllCookie()
    setUsername('')
    setNickname('')
  }

  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <CocoIcon type='icon-logo' />
        </div>
        <div className="list">
          {renderNav()}
        </div>
        {!username && (
          <div className="login">
            <button onClick={handleToLogin} className="button">
              登录
            </button>
          </div>
        )}
        {username && (
          <Row className="login" align="middle">
            <div>欢迎你，{nickname}</div>
            <button onClick={handleToLogout} className="button">
              注销
            </button>
          </Row>
        )}
        <Search />
      </div>
    </div>
  );
}

export default withRouter(Header);