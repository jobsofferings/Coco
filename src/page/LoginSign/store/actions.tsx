import * as constants from './constants'
import { Dispatch } from 'redux';

export interface ChangeInputValueEnthusiasm {
  type: constants.CHANGE_INPUT_VALUE;
  value: string
}

export type LoginEnthusiasm = (dispatch: Dispatch) => void;

export type LoginSignAction = ChangeInputValueEnthusiasm;

/**
 * 获取IP数据
 **/
export function getIPData(): LoginEnthusiasm {
  return (dispatch: Dispatch) => {
    // loginApi().then((res: LoginDateProps) => {
    //     dispatch(loginApi(res));
    // }).catch((err: Error) => {
    //     console.log(err);
    // })
  };
}

export function inChangeInputValue(value: string): ChangeInputValueEnthusiasm {
  return {
    type: constants.CHANGE_INPUT_VALUE,
    value
  }
}