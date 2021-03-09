import React, { useState } from 'react';
import { LOGO, SEARCH } from '../../../svg'
import { CLOSE } from '../../../svg_second'
import { Link, withRouter } from 'react-router-dom';
import './index.less'

const navList = [{
  title: '首页',
  href: '/'
}, {
  title: '归档',
  href: '/archive'
}, {
  title: '关于',
  href: '/about'
}, {
  title: '留言区',
  href: '/message'
}];

function Header(props: any) {

  const [navIndex, setNavIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const pathname = props.history.location.pathname;

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    setInputValue(inputValue);
  }

  const handleClearInput = () => {
    setInputValue('');
  }

  const handleSearch = () => {
    console.log('根据inputValue查询文章');
  }

  const handlePress = ({ charCode }: React.KeyboardEvent) => {
    charCode === 13 && handleSearch()
  }

  const handleChangerouter = (navIndex: number) => setNavIndex(navIndex)

  const renderNav = () => {
    const spanStyle = { left: `${navIndex * 52 + 10}px`, width: `${navIndex ? (navIndex !== 3 ? 32 : 48) : 0}px` };
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
          <CLOSE className={`search-close ${!inputValue.length ? 'hide' : ''}`} onClick={handleClearInput} />
          <input value={inputValue} onKeyPress={handlePress} onChange={handelChange} type="text" placeholder="搜索文章" />
          <div className="search-icon" onClick={handleSearch}>
            <SEARCH className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);