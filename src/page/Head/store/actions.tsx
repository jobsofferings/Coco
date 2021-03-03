import * as constants from './constants'
import { } from './types';

export interface ChangeInputValueEnthusiasm {
    type: constants.CHANGE_INPUT_VALUE;
    value: string
}

export interface ChangeRouterEnthusiasm {
    type: constants.CHANGE_ROUTER;
    navIndex: string
}


export type HeadAction = ChangeInputValueEnthusiasm | ChangeRouterEnthusiasm;


export function inChangeInputValue(value: string): ChangeInputValueEnthusiasm {
    return {
        type: constants.CHANGE_INPUT_VALUE,
        value
    }
}

export function inChangeRouter(navIndex: string): ChangeRouterEnthusiasm {
    return {
        type: constants.CHANGE_ROUTER,
        navIndex
    }
}

