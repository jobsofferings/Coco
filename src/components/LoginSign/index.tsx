import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from './store/types';
import * as actions from './store/actions';
import { Route, BrowserRouter } from 'react-router-dom';

import './index.scss'

function LoginSign(state: StoreState) {
    
    return (
        <BrowserRouter >
            <div className="login">
                <p>111</p>
            </div>
        </BrowserRouter >
    );
}

export function mapStateToProps(state: propsState) {
    return { ...state.loginSign }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.LoginSignAction>) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(LoginSign));