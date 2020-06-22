import axios from 'axios';
import { merge } from 'lodash';

import './axiosSetting';

const request = async (_options, met) => {
    // 默认GET方法
    const method = met || 'GET';
    const options = merge(
        { ..._options },
        {
            method,
        }
    )
    console.log(options);
    return axios(options)
}

/**
 * 封装get请求
 * @param { String } url 请求路径
 * @param { Object } 请求参数
 *  params GET请求参数
 */
const get = (url, params, _options) => {
    return request({ ..._options, params, url })
}
/**
   * 封装post请求
   * @param { Object } 请求参数
   *  data POST请求请求参数，对象形式
   */
const post = (url, data, _options) => {
    return request({ ..._options, data, url }, 'POST')
}
  
export { get, post }
export default request;