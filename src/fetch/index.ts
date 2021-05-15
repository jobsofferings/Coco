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

export function login<T = GetArticleByIdProps>(props: T) {
  return baseQueryFunction<T>('/login', props)
}

export function sign<T = GetArticleByIdProps>(props: T) {
  return baseQueryFunction<T>('/sign', props)
}

export function getArticle<T = GetArticleProps>(props: T) {
  return baseQueryFunction<T>('/article', props)
}

export function getArticleById<T = GetArticleByIdProps>(props: T) {
  return baseQueryFunction<T>('/articleDetail', props)
}

export function starArticles<T = GetArticleByIdProps>(props: T) {
  return baseQueryFunction<T>('/starArticles', props)
}

export function getFriendLink<T = GetArticleByIdProps>(props: T) {
  return baseQueryFunction<T>('/getFriendLink', props)
}

export function addMessage<T = GetArticleByIdProps>(props: T) {
  return baseQueryFunction<T>('/addMessage', props)
}