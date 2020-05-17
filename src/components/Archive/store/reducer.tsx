import { ArchiveAction } from './actions';
import { StoreState } from './types';
import { CHANGE_INPUT_VALUE } from './constants';

const AppState: StoreState = {
    inputValue: '',
}

export default function enthusiasm(state: StoreState = AppState, action: ArchiveAction): StoreState {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return { ...state, inputValue: action.value };
    }
    return state;
}