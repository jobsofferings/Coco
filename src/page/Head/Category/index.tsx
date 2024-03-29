import React from 'react';
import { Empty } from 'antd';
import CocoIcon from 'src/components/WhaleIcon';
import './index.less'

function Category() {

  const categoryList = ['JavaScript', 'Node', 'CSS', 'React', 'Vue', '思考'];

  return (
    <div className="category">
      <div className="category-header">
        <CocoIcon type='icon-category' />
        <div className="category-title">组别标签</div>
      </div>
      <div className="category-content">
        {categoryList.length ? categoryList.map((item, index) =>
          <div className="category-item" key={index}>
            <p>{item}</p>
          </div>
        ) : <Empty description="有东西不见了哦" />}
      </div>
    </div>
  );
}

export default Category