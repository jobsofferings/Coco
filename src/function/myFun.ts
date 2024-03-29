import { message } from "antd";

export const getMonthEng = (month: number) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month - 1];

/**
 * 只转正整数 < 100
 **/
export const formatTimeNum = (num: number) => (num <= 0 || num >= 100) ? '' : `${num >= 10 ? '' : '0'}${num}`;

export const abstractFn = (res: string) => {
  if (!res) {
    return '';
  } else {
    var str = res.replace(/(\*\*|__)(.*?)(\*\*|__)/g, '')          //全局匹配内粗体
      .replace(/\!\[[\s\S]*?\]\([\s\S]*?\)/g, '')                  //全局匹配图片
      .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, '')                    //全局匹配连接
      .replace(/<\/?.+?\/?>/g, '')                                 //全局匹配内html标签
      .replace(/(\*)(.*?)(\*)/g, '')                               //全局匹配内联代码块
      .replace(/`{1,2}[^`](.*?)`{1,2}/g, '')                       //全局匹配内联代码块
      .replace(/```([\s\S]*?)```[\s]*/g, '')                       //全局匹配代码块
      .replace(/\~\~(.*?)\~\~/g, '')                               //全局匹配删除线
      .replace(/[\s]*[-\*\+]+(.*)/g, '')                           //全局匹配无序列表
      .replace(/[\s]*[0-9]+\.(.*)/g, '')                           //全局匹配有序列表
      .replace(/(#+)(.*)/g, '')                                    //全局匹配标题
      .replace(/(>+)(.*)/g, '')                                    //全局匹配摘要
      .replace(/\r\n/g, "")                                        //全局匹配换行
      .replace(/\n/g, "")                                          //全局匹配换行
      .replace(/\s/g, "")                                          //全局匹配空字符;
      .replace(/&emsp;/g, "")
    return str.slice(0, 155);
  }
}

export const formatDateToString = (date: Date) => `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`

export const handleSubmit = () => message.info('当前功能未开发')

export const getCookie = (name: string) => {
  const strcookie = document.cookie
  const arrcookie = strcookie.split("; ")
  for (let i = 0; i < arrcookie.length; i++) {
    const arr = arrcookie[i].split("=")
    if (arr[0] == name) return arr[1]
  }
  return "";
}

export const clearAllCookie = () => {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g) || [];
  if (keys) {
    keys.forEach(item => {
      document.cookie = item + '=0;expires=' + new Date(0).toUTCString()
    })
  }
}