import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../../store/types';
import * as actions from '../../store/actions';

import './index.scss'

function MesContent(state: StoreState) {

    return (
        <div className="archive-content-area">
            <div className="archive-content">

            </div>
        </div>
    );
}

export function mapStateToProps(state: propsState) {
    return { ...state.head }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MesContent));