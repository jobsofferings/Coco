import axios from "axios";

axios.defaults.baseURL = 'http://www.jobsofferings.cn:5000'

const env = process.env.NODE_ENV

if (env === 'development') {
  axios.defaults.baseURL = 'http://localhost:5000'
} else if (env === 'production') {
  axios.defaults.baseURL = 'http://www.jobsofferings.cn:5000'
}

axios.defaults.withCredentials = true;

// 后续补充response拦截器拦截错误，错误统一处理

// 原拦截器为捆绑token进request，后直接后端取cookie
// axios.interceptors.request.use(
//   config => {
//     const TOKEN = 'token'
//     if(!config.headers[TOKEN]){
//       config.headers[TOKEN] = getCookie(TOKEN);
//     }
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   }
// );

export const axiosGet = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        data
      })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}

export function axiosPost(url: string, data: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url,
        data
      )
      .then(function (res) {
        resolve(res);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}