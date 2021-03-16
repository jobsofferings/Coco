import { useRequest } from "ahooks";
import React from "react";
import BaseMarkdown from "src/components/BaseMarkdown/BaseMarkdown";
import { getArticleById } from "src/fetch";
import { articleItem } from "../Archive/TimeArchive/types";
import './ArticleDetailContent.less'

interface ArticleDetailContentProps {
  id: string
}

const ArticleDetailContent = ({ id }: ArticleDetailContentProps) => {

  const { data } = useRequest<{ data: articleItem }>(() => getArticleById({
    id
  }));

  return <div className='article-detail-content'>
    <BaseMarkdown 
      source={data?.data?.summary || ''}
    />
  </div>;
}

export default ArticleDetailContent;