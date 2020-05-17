import * as constants from './constants'
import {  } from './types';
import { Dispatch } from 'redux';

export interface LeftEnthusiasm {
    type: constants.LEFT_PAGE_CONTROL_ENTHUSIASM;
}

export interface RightEnthusiasm {
    type: constants.RIGHT_PAGE_CONTROL_ENTHUSIASM;
}

export type HeadAction = LeftEnthusiasm | RightEnthusiasm;

/**
 * 控制左侧伸缩
 **/ 
export function inLeftPageControl(): LeftEnthusiasm {
    return {
        type: constants.LEFT_PAGE_CONTROL_ENTHUSIASM
    }
}

/**
 * 控制右侧伸缩
 **/
export function inRightPageControl(): RightEnthusiasm {
    return {
        type: constants.RIGHT_PAGE_CONTROL_ENTHUSIASM
    }
}