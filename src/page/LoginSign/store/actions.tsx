import * as constants from './constants'
import { } from './types';
import { Dispatch } from 'redux';

export interface ChangeInputValueEnthusiasm {
    type: constants.CHANGE_INPUT_VALUE;
    value: string
}



export type LoginSignAction = ChangeInputValueEnthusiasm;


export function inChangeInputValue(value: string): ChangeInputValueEnthusiasm {
    return {
        type: constants.CHANGE_INPUT_VALUE,
        value
    }
}
