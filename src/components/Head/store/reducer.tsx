import { HeadAction } from './actions';
import { StoreState } from './types';
import { CHANGE_INPUT_VALUE, CHANGE_ROUTER } from './constants';

const headState: StoreState = {
    inputValue: '',
    navList: [{
        title: '首页',
        href: '/'
    }, {
        title: '归档',
        href: '/archive'
    }, {
        title: '关于',
        href: '/about'
    }, {
        title: '留言区',
        href: '/message'
    }],
    navIndex: 0,
    starArticleList: [{
        title: '使用 React hooks 转化 class 的一些思考',
    }, {
        title: '从合并请求角度谈性能优化'
    }, {
        title: 'Redux在项目中的文件结构'
    }, {
        title: 'Redux的createStore实现'
    }, {
        title: 'React+wangeditor+node富文本处理带图片上传'
    }, {
        title: 'React＋Echarts简单的封装套路'
    }, {
        title: '给自己的博客添加一个侧边栏'
    }, {
        title: 'JS中map与forEach的区别'
    }, {
        title: '使用canvas制作五子棋游戏'
    }, {
        title: 'axios的Get和Post方法封装及Node后端接收数据'
    },],
    ArticlesList: [{
        title: '从合并请求角度谈性能优化',
        headImgSrc: 'http://www.jobsofferings.cn:4397/article1.jpg',
        summary: '今年年初在组内做的一个技术分享，主要讲的是：vue cli 3 原理浅析，以及如何能够扩展 vue cli 3 的插件能力？参考了 umi 和 nuxt 的实现原理',
        author: '米卡',
        like: 6,
        read: 100,
        comment: 13,
        timer: 10000000,
        timeFormated: 'Nove 9, 2020'
    }, {
        title: '从合并请求角度谈性能优化',
        headImgSrc: 'http://www.jobsofferings.cn:4397/article2.jpg',
        summary: '今年年初在组内做的一个技术分享，主要讲的是：vue cli 3 原理浅析，以及如何能够扩展 vue cli 3 的插件能力？参考了 umi 和 nuxt 的实现原理',
        author: '米卡',
        like: 6,
        read: 100,
        comment: 13,
        timer: 10000000,
        timeFormated: 'Nove 9, 2020'
    }, {
        title: '从合并请求角度谈性能优化',
        headImgSrc: 'https://static.jooger.me/img/source/20200404/vue-cli3_1585967248562.jpg?x-oss-process=style/watermark',
        summary: '今年年初在组内做的一个技术分享，主要讲的是：vue cli 3 原理浅析，以及如何能够扩展 vue cli 3 的插件能力？参考了 umi 和 nuxt 的实现原理',
        author: '米卡',
        like: 6,
        read: 100,
        comment: 13,
        timer: 10000000,
        timeFormated: 'Nove 9, 2020'
    }, {
        title: '从合并请求角度谈性能优化',
        headImgSrc: 'https://static.jooger.me/img/source/20200404/vue-cli3_1585967248562.jpg?x-oss-process=style/watermark',
        summary: '今年年初在组内做的一个技术分享，主要讲的是：vue cli 3 原理浅析，以及如何能够扩展 vue cli 3 的插件能力？参考了 umi 和 nuxt 的实现原理',
        author: '米卡',
        like: 6,
        read: 100,
        comment: 13,
        timer: 10000000,
        timeFormated: 'Nove 9, 2020'
    }, {
        title: '从合并请求角度谈性能优化',
        headImgSrc: 'https://static.jooger.me/img/source/20200404/vue-cli3_1585967248562.jpg?x-oss-process=style/watermark',
        summary: '今年年初在组内做的一个技术分享，主要讲的是：vue cli 3 原理浅析，以及如何能够扩展 vue cli 3 的插件能力？参考了 umi 和 nuxt 的实现原理',
        author: '米卡',
        like: 6,
        read: 100,
        comment: 13,
        timer: 10000000,
        timeFormated: 'Nove 9, 2020'
    }, {
        title: '从合并请求角度谈性能优化',
        headImgSrc: 'https://static.jooger.me/img/source/20200404/vue-cli3_1585967248562.jpg?x-oss-process=style/watermark',
        summary: '今年年初在组内做的一个技术分享，主要讲的是：vue cli 3 原理浅析，以及如何能够扩展 vue cli 3 的插件能力？参考了 umi 和 nuxt 的实现原理',
        author: '米卡',
        like: 6,
        read: 100,
        comment: 13,
        timer: 10000000,
        timeFormated: 'Nove 9, 2020'
    }],
    messageList: [{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    },{
        username: '三毛',
        imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
        messageContent: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
        timer: 10000000,
        timeFormated: '2020-03-17 14:47',
        like: 3
    }],
    categoryList: ['JavaScript', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考']
}

export default function enthusiasm(state: StoreState = headState, action: HeadAction): StoreState {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return { ...state, inputValue: action.value };
        case CHANGE_ROUTER:
            return { ...state, navIndex: action.navIndex };
    }
    return state;
}