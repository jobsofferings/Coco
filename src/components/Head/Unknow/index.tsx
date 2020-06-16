import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../store/types';
import * as actions from '../store/actions';

import './index.scss'

export default (state: StoreState) => {

	return (
		<div className="content-area" key="three">
			没有找到这个界面哟
		</div>
	);
}