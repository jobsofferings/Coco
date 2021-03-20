import React from "react";
import { Spin } from "antd";
import BaseMarkdown from "src/components/BaseMarkdown/BaseMarkdown";
import { getArticleById } from "src/fetch";
import useBaseQuery from "src/hooks/useBaseQuery";
import './ArticleDetailContent.less'

interface ArticleDetailContentProps {
  id: string
}

const ArticleDetailContent = ({ id }: ArticleDetailContentProps) => {

  const { data, loading } = useBaseQuery({
    query: '/articleDetail',
    queryFn: () => getArticleById({
      id
    }),
    cacheTime: 0,
  })

  return <div className='article-detail-content'>
    <Spin spinning={loading}>
      <BaseMarkdown
        source={data?.summary || ''}
      />
    </Spin>
  </div>;
}

export default ArticleDetailContent;