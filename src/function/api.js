import {post} from './server'
// export const checkedLogin = p => http.post('/checkedLogin', p);相当于
// export const checkedLogin = (p) => http.post('/checkedLogin', p);

// 注意，如果需要部署到服务器上,proxy属性删除,
// 接口加前缀 http://134.175.103.75:4397

// let port = 'http://134.175.103.75:4397';
// // 获取所有种类的文章，数量小于等于5
// export const getAllTypeArticlesApi = p => http.post('/getAllTypeArticles', p);
// // 获取最近的五个文章
// export const getNearArticlesApi = p => http.post('/getNearArticles', p);
// // 根据_id查找文章
// export const getArticleBy_idApi = p => http.post('/getArticleBy_id', p);
// // 根据文本模糊查询文章
// export const getArticlesByStrApi = p => http.post('/getArticlesByStr', p);

// 登陆请求
export const loginApi = p => post('/loginApi', p);