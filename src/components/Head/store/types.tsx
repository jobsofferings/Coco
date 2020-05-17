export interface StoreState {
    [x: string]: any;
    inputValue: string,
    starArticleList: starArticleItem[],
    ArticlesList: articleItem[],
    categoryList:string[]
}



export interface propsState {
    head: StoreState
}

export interface starArticleItem {
    title: string,
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
