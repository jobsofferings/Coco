import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';
import Articles from './Articles';
import Menu from '../Menu';
import Category from '../Category';
import { Spin } from 'antd';
import BaseContent from 'src/components/BaseContent';
import { getArticle } from 'src/fetch';
import useBaseQuery from 'src/hooks/useBaseQuery';
import { PAGE_LIMIT } from 'src/config';
import './index.less'

const Index = () => {

  const { id: key = '' } = useParams<OPUtils.RouterParams>()
  const [limit, setLimit] = useState(PAGE_LIMIT);
  const [list, setList] = useState([]);
  const [listTotal, setListTotal] = useState(0);

  const { data: { data, total }, loading, refetch } = useBaseQuery({
    query: [{
      offset: 0,
      limit,
      key,
    }],
    queryFn: ({ queryKey }) => getArticle(queryKey[0]),
  })

  useEffect(() => {
    data && setList(data);
    total && setListTotal(total);
  }, [data, total])

  const getMore = () => {
    if (limit < listTotal) {
      setLimit(limit + 10)
      refetch();
    }
  }

  return (
    <div className="content-area" key="one">
      <div className="content-area-left">
        <Carousel />
        <Spin spinning={loading && !list.length}>
          <Articles data={list} total={listTotal} getMore={getMore} />
        </Spin>
      </div>
      <div className="content-area-right">
        <div className="content-area-right-fixed">
          <Category />
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default BaseContent(Index);
