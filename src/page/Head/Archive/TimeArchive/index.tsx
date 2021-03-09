import React from 'react';
import { ARCHIVE } from '../../../../svg';
import { getMonthEng, formatTimeNum } from '../../../../function/myFun';
import { timelineDataParams } from './types';
import './index.less'

interface propsParams {
	timelineData: timelineDataParams
}

const iconStyle = { width: 40, height: 40 };

function TimeArchive(props: propsParams) {

	const { timelineData } = props;

	return (
		<div className="time-archive" key="two">
			<div className="time-archive-header">
				<div>
					<ARCHIVE style={iconStyle} />
					<p>归档</p>
					<div>目前共计 <span>27</span> 篇文章</div>
				</div>
			</div>
			<div className="time-archive-content">
				{timelineData.sort((a, b) => (b.year - a.year)).map((item, index) => (
					<div className='year-content' key={index}>
						<p>{item.year}</p>
						{item.monthList.sort((a, b) => (b.month - a.month)).map((item1, index1) => (
							<div className='month-content' key={index1}>
								<p>{getMonthEng(item1.month)}</p>
								{item1.dayList.sort((a, b) => (b.day - a.day)).map((item2, index2) => (
									<div className='day-content' key={index2}>
										<p>{formatTimeNum(item1.month)}-{formatTimeNum(item2.day)}</p>
										<span>原创</span>
										<p>{item2.title}</p>
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default TimeArchive;