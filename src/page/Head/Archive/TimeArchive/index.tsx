import * as React from 'react';

import './index.scss'
import { timelineDataParams } from '../../store/types'
import { ARCHIVE } from '../../../../svg';
import { getMonthEng, formatTimeNum } from '../../../../function/myFun';

interface propsParams {
	timelineData: timelineDataParams
}

function TimeArchive(props: propsParams) {

	const { timelineData } = props;

	return (
		<div className="time-archive" key="two">
			<div className="time-archive-header">
				<div>
					<ARCHIVE style={{ width: 40, height: 40 }} />
					<p>归档</p>
					<div>目前共计 <span>27</span> 篇文章</div>
				</div>
			</div>
			<div className="time-archive-content">
				{timelineData.sort((a, b) => (b.year - a.year)).map(item => {
					return <div className='year-content'>
						<p>{item.year}</p>
						{item.monthList.sort((a, b) => (b.month - a.month)).map(item1 => {
							return <div className='month-content'>
								<p>{getMonthEng(item1.month)}</p>
								{item1.dayList.sort((a, b) => (b.day - a.day)).map(item2 => {
									return <div className='day-content'>
										<p>{formatTimeNum(item1.month)}-{formatTimeNum(item2.day)}</p>
										<span>原创</span>
										<p>{item2.title}</p>
									</div>
								})}
							</div>
						})}
					</div>
				})}
			</div>
		</div>
	);
}

export default TimeArchive;