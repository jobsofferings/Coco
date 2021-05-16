import React, { useState } from "react";
import { withRouter } from "react-router";
import { PATH_SEARCH } from "src/router/config";
import CocoIcon from "src/components/WhaleIcon";

const Search = (props: any) => {

  const [inputValue, setInputValue] = useState('');

  const handelChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setInputValue(value)

  const handleClearInput = () => {
    setInputValue('');
  }

  const handleSearch = (val: string) => {
    props.history.push(`${PATH_SEARCH}/${val}`)
    setInputValue('')
  }

  const handlePress = ({ charCode }: React.KeyboardEvent) => {
    charCode === 13 && handleSearch(inputValue)
  }

  return <div className="search">
    <CocoIcon
      type='icon-close'
      className={`search-close ${!inputValue.length ? 'hide' : ''}`}
      onClick={handleClearInput}
    />
    <input
      type="text"
      value={inputValue}
      onKeyPress={handlePress}
      onChange={handelChange}
      placeholder="搜索文章"
    />
    <div className="search-icon" onClick={() => handleSearch(inputValue)}>
      <CocoIcon type='icon-search' className="icon" />
    </div>
  </div>
}

export default withRouter(Search);