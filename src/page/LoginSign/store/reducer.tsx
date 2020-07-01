import { LoginSignAction } from './actions';
import { StoreState } from './types';
import { CHANGE_INPUT_VALUE } from './constants';

const headState: StoreState = {
    inputValue: '',

}

export default function enthusiasm(state: StoreState = headState, action: LoginSignAction): StoreState {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return { ...state, inputValue: action.value };
    }
    return state;
}