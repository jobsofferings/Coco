import axios from 'axios'
import { message } from 'antd';
// import qs from 'qs'

// 这个部分等node端准备好后开始调

axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。', // 可以跳转login
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
}

// axiosSetting.js
// request拦截器
axios.interceptors.request.use(
    config => {
        // // Do something before request is sent
        // const token = getToken()
        // // console.log(window.location.href.indexOf('/user/login') > -1)
        // if (config.url.indexOf('/auth/oauth/token') > 0) {
        //     config.headers.Authorization = 'Basic dnVlOnZ1ZQ==' // 增加客户端认证
        // } else {
        //     config.headers.Authorization = token // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        // }
        // const { url } = config
        // if (/^\/api\//.test(url) && !token && !window.location.href.indexOf('user') > -1) {
        //     const { dispatch } = store
        //     dispatch(routerRedux.replace('/user/login')) // 跳转到登录页
        // }
        // return config
        config.timeout = 30000;
        return config; 
    },
    error => {
        message.info('加载超时');
        Promise.reject(error)
    }
)
// respone拦截器
axios.interceptors.response.use(
    response => {
        /**
         * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
         * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
         */
        const res = response.data
        // if (response.status === 401 || res.status === 40101) {
        //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //     confirmButtonText: '重新登录',
        //     cancelButtonText: '取消',
        //     type: 'warning'
        //   }).then(() => {
        //     store.dispatch('LogOut').then(() => {
        //       location.reload() // 为了重新实例化vue-router对象 避免bug
        //     })
        //   })
        //   return Promise.reject('error')
        // }
        // if (res.status === 30101) {
        //   Message({
        //     message: res.message,
        //     type: 'error',
        //     duration: 5 * 1000
        //   })
        //   return Promise.reject('error')
        // }
        // if (res.status === 40301) {
        //   Message({
        //     message: '当前用户无相关操作权限！',
        //     type: 'error',
        //     duration: 5 * 1000
        //   })
        //   return Promise.reject('error')
        // }
        if (response.status !== 200 && res.status !== 200) {
            message.error(response.data.message)
            // notification.error({
            //     message: res.status,
            //     description: res.message,
            // })
        } else {
            return response.data
        }
    },
    error => {
        // console.log(JSON.stringify(error)) // for debug
        if (error === undefined || error.code === 'ECONNABORTED') {
            message.warning('服务请求超时')
            return Promise.reject(error)
        }
        console.log(error);
        // const { response: { status, statusText, data: { msg = '服务器发生错误' } } } = error
        const { response } = error
        console.log(response);

        // if (error.response) {
		// 	if (error.response.status === 401) {
		// 		// 这种情况一般调到登录页
		// 	} else if (error.response.status === 403) {
		// 		// 提示无权限等
		// 	} else {
		// 		// 其他错误处理
		// 	}
        // }
        
        // const { dispatch } = store
        // const text = codeMessage[status] || statusText || msg

        // if (status === 400) {
        //     // message.warning('账户或密码错误！')
        //     dispatch(routerRedux.push('/user/login'))
        // }
        // const info = response.data
        // if (status === 401 || info.status === 40101) {
        //     dispatch({
        //         type: 'login/logout',
        //     })
        //     // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //     //     confirmButtonText: '重新登录',
        //     //     cancelButtonText: '取消',
        //     //     type: 'warning',
        //     // }).then(() => {
        //     //     store.dispatch('LogOut').then(() => {
        //     //         location.reload() // 为了重新实例化vue-router对象 避免bug
        //     //     })
        //     // })
        // }
        // if (status === 403) {
        //     dispatch(routerRedux.push('/exception/403'))
        //     // Notification.warning({
        //     //     title: '禁止',
        //     //     message: info.message,
        //     //     type: 'error',
        //     //     duration: 2 * 1000,
        //     // })
        // }
        // if (info.status === 30101) {
        //     dispatch(routerRedux.push('/exception/500'))
        //     // Notification.warning({
        //     //     title: '失败',
        //     //     message: info.message,
        //     //     type: 'error',
        //     //     duration: 2 * 1000,
        //     // })
        // }
        // if (response.status === 504) {
        //     message.warning('账户或密码错误！')
        //     // Message({
        //     //     message: '后端服务异常，请联系管理员！',
        //     //     type: 'error',
        //     //     duration: 5 * 1000,
        //     // })
        // }
        // message.error(`${status}:${text}`)
        // throw error
        // return error
        message.warning('错误')
        return Promise.reject(error)
    }
)

// const http = {
//     post: '',
//     get: ''
// }

// http.post = function (api, data) {
//     let params = qs.stringify(data);
//     return new Promise((resolve, reject) => {
//         axios.post(api, params).then(res => {
//             resolve(res.data)
//         }).catch(err => {
//             reject(err.data)
//         })
//     })
// }

// http.get = function (api, data) {
//     let params = qs.stringify(data);
//     return new Promise((resolve, reject) => {
//         axios.get(api, params).then(res => {
//             resolve(res.data)
//         }).catch(err => {
//             reject(err.data)
//         })
//     })
// }

// export default http;