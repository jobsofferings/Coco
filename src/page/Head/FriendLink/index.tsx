import React from 'react';
import Content from './Content';
import Header from './Header';
import BaseContent from 'src/components/BaseContent';
import { getFriendLink } from 'src/fetch';
import useBaseQuery from 'src/hooks/useBaseQuery';
import './index.less'

const FriendLink = () => {

  const { data: { data } } = useBaseQuery({
    query: '/getFriendLink',
    queryFn: () => getFriendLink({}),
  })

  return (
    <div className="content-area" key="four">
      <Header total={(data || []).length} />
      <Content data={data || []} />
    </div>
  );
}

export default BaseContent(FriendLink);