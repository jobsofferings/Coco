import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';

import './index.scss'
import Carousel from '../Carousel';
import Articles from '../Articles';
import Menu from '../Menu';
import Category from '../Category';

function Index(state: StoreState) {

    return (
        <div className="content-area">
            <div className="content-area-left">
                <Carousel />
                <Articles />
            </div>
            <div className="content-area-right">
                <Menu />
                <Category />
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Index));