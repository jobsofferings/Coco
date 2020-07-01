export interface StoreState {
    [x: string]: any;
    inputValue: string,
    navList: navItem[],
    messageList: messageItem[],
    starArticleList: starArticleItem[],
    ArticlesList: articleItem[],
    categoryList: string[]
}



export interface propsState {
    head: StoreState
}

export interface starArticleItem {
    title: string,
}

export interface navItem {
    title: string,
    href: string,
}

export interface messageItem {
    username: string,
    imgSrc: string,
    messageContent: string,
    timer: number,
    timeFormated: string,
    like: number,
    active: boolean
}

export interface articleItem {
    title: string,
    headImgSrc: string,
    summary: string,
    author: string,
    like: number,
    read: number,
    comment: number,
    timer: number,
    timeFormated: string,
}
