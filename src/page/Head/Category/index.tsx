import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';
import { CATEGORY } from '../../../svg';
import { Empty } from 'antd';
import './index.scss'

function Category(state: StoreState) {

  return (
    <div className="category">
      <div className="category-header">
        <CATEGORY />
        <div className="category-title">组别标签</div>
      </div>
      <div className="category-content">
        {state.categoryList.length ? state.categoryList.map((item, index) =>
          <div className="category-item" key={index}>
            <p>{item}</p>
          </div>
        ) : <Empty description="有东西不见了哦" />}
      </div>
    </div>
  );
}

export function mapStateToProps(state: propsState) {
  return { categoryList: state.head.categoryList }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
  return {
    changeInputValue(val: string) {
      dispatch(actions.inChangeInputValue(val));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Category));