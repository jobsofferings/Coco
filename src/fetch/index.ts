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

export const getArticle = (props: GetArticleProps) => {
  return new Promise((resolve) => {
    axiosPost('/article', props).then(res => {
      resolve(res);
    })
  })
}

export const getArticleById = (props: GetArticleByIdProps) => {
  return new Promise((resolve) => {
    axiosPost('/articleDetail', props).then(res => {
      resolve(res);
    })
  })
}