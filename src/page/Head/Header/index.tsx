import React, { useState } from 'react';
import { ReactComponent as LOGO } from 'src/assert/logo.svg'
import { ReactComponent as SEARCH } from 'src/assert/search.svg'
import { ReactComponent as CLOSE } from 'src/assert/close.svg'
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
  title: '友链',
  href: '/link'
}];

const Header = (props: any) => {

  const [navIndex, setNavIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const pathname = props.history.location.pathname;

  const handelChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setInputValue(value)

  const handleClearInput = () => {
    setInputValue('');
  }

  const handleSearch = (val: string) => {
    props.history.push(`/search/${val}`)
    setInputValue('')
  }

  const handlePress = ({ charCode }: React.KeyboardEvent) => {
    charCode === 13 && handleSearch(inputValue)
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
          <input
            type="text"
            value={inputValue}
            onKeyPress={handlePress}
            onChange={handelChange}
            placeholder="搜索文章"
          />
          <div className="search-icon" onClick={() => handleSearch(inputValue)}>
            <SEARCH className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);