export interface StoreState {
    [x: string]: any;
    inputValue: string,
}

export interface propsState {
    loginSign: StoreState
}

export interface LoginDateProps {
    username: string,
    password: string
}