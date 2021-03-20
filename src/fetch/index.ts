import { axiosPost } from "src/function/axios";

export interface GetArticleProps {
  offset?: number,
  limit?: number,
  id?: string
  key?: string
}

export interface GetArticleByIdProps {
  id: string
}

function baseQueryFunction<T = any>(query: string, props: T) {
  return new Promise((resolve, reject) => {
    axiosPost(query, props).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err)
    })
  })
}

export function getArticle<T = GetArticleProps>(props: T) {
  return baseQueryFunction<T>('/article', props)
}

export function getArticleById<T = GetArticleByIdProps>(props: T) {
  return baseQueryFunction<T>('/articleDetail', props)
}