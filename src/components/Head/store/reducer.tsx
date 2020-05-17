import { HeadAction } from './actions';
import { StoreState } from './types';
import { CHANGE_INPUT_VALUE } from './constants';

const headState: StoreState = {
    inputValue: '',
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
        headImgSrc: 'https://images.cnblogs.com/cnblogs_com/JobsOfferings/1363202/o_preview.jpg',
        summary: '今年年初在组内做的一个技术分享，主要讲的是：vue cli 3 原理浅析，以及如何能够扩展 vue cli 3 的插件能力？参考了 umi 和 nuxt 的实现原理',
        author: '米卡',
        like: 6,
        read: 100,
        comment: 13,
        timer: 10000000,
        timeFormated: 'Nove 9, 2020'
    }, {
        title: '从合并请求角度谈性能优化',
        headImgSrc: 'https://images.cnblogs.com/cnblogs_com/JobsOfferings/1363202/o_2005161302301.jpg',
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
    categoryList: ['JavaScript', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考', 'Node', 'CSS', 'React', 'Vue', '思考']
}

export default function enthusiasm(state: StoreState = headState, action: HeadAction): StoreState {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return { ...state, inputValue: action.value };
    }
    return state;
}