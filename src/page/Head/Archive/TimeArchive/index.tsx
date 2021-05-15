import React from 'react';
import { ReactComponent as ARCHIVE } from 'src/assert/archive.svg'
import { getArticle } from 'src/fetch';
import useBaseQuery from 'src/hooks/useBaseQuery';
import moment from 'moment';
import { formatTimeNum, getMonthEng } from 'src/function/myFun';
import { Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { articleItem } from '../../Index/Articles';
import { PATH_DETAIL } from 'src/router/config';
import './index.less'

const iconStyle = { width: 40, height: 40 };

const TimeArchive = (props: any) => {

	const { data: { data, total }, loading } = useBaseQuery({
		query: [{ limit: 9999, offset: 0 }],
		queryFn: ({ queryKey }) => getArticle(queryKey[0]),
	})

	const renderYear = (data: articleItem[] = []) => {
		const yearTemp = {};
		data.forEach(item => {
			const year = moment(parseInt(item.timer)).year();
			if (yearTemp[year]) {
				yearTemp[year].push(item)
			} else {
				yearTemp[year] = [item]
			}
		})
		const res = Object.keys(yearTemp).sort((a, b) => parseInt(b) - parseInt(a));
		return res.map((item, index) => (
			<div className='year-content' key={index}>
				<p>{item}</p>
				{renderMonth(yearTemp[item])}
			</div>
		))
	}

	const renderMonth = (data: any[] = []) => {
		const monthTemp = {};
		data.forEach(item => {
			const month = moment(parseInt(item.timer)).month();
			if (monthTemp[month]) {
				monthTemp[month].push(item)
			} else {
				monthTemp[month] = [item]
			}
		})
		const res = Object.keys(monthTemp).sort((a, b) => parseInt(b) - parseInt(a));
		return res.map((item, index) => (
			<div className='month-content' key={index}>
				<p>{getMonthEng(parseInt(item))}</p>
				{renderDay(monthTemp[item])}
			</div>
		))
	}

	const renderDay = (data: any[] = []) => {
		return data.map((item, index) => {
			const time = moment(parseInt(item.timer));
			return (
				<div onClick={() => handleToDetails(item.id)} className='day-content' key={index}>
					<p>{formatTimeNum(time.month())}-{formatTimeNum(time.date())}</p>
					<span>{item.author}</span>
					<p>{item.title}</p>
				</div>
			)
		})
	}

	const handleToDetails = (id: string) => props.history.push(`${PATH_DETAIL}/${id}`);

	return (
		<Spin spinning={loading}>
			<div className="time-archive" key="two">
				<div className="time-archive-header">
					<div>
						<ARCHIVE style={iconStyle} />
						<p>归档</p>
						<div>目前共计 <span>{total}</span> 篇文章</div>
					</div>
				</div>
				<div className="time-archive-content">
					{renderYear(data)}
				</div>
			</div>
		</Spin>
	);
}

export default withRouter(TimeArchive);