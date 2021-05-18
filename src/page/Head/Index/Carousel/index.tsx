import React from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import './index.less'

interface ChangeCarousel {
	isNext: boolean
}

const carouselList = ['欢迎枫殇NET开发加入友链', '欢迎柠萌博客加入友链']

function Carousel() {
	const [trans, setTrans] = React.useState(0);

	const handleChangeCarousel = (params: ChangeCarousel) => {
		const carousel = document.getElementsByClassName('carousel-area')[0];
		const allHeight = carousel ? carousel.clientHeight : 0;
		const height = allHeight / carouselList.length;
		if (params.isNext) {
			let nextHeight = trans - height;
			if (nextHeight >= -allHeight + height) {
				setTrans(nextHeight);
			} else {
				setTrans(0)
			}
		} else {
			let nextHeight = trans + height;
			if (nextHeight <= 0) {
				setTrans(nextHeight);
			}
		}
	}

	const startChangeCarousel = () => {
		handleChangeCarousel({ isNext: true });
	}

	React.useEffect(() => {
		const interval = window.setInterval(startChangeCarousel, 7000);
		return () => window.clearInterval(interval)
	}, [trans])

	return (
		<div className="carousel">
			<div className="carousel-area" style={{ transform: `translateY(${trans}px)` }}>
				{carouselList.map((item, index) => <div key={index} className="carousel-list">
					<div>
						<NotificationOutlined />
					</div>
					<p>{item}</p>
				</div>)}
			</div>
			<div className="carousel-control">
				<div onClick={() => handleChangeCarousel({ isNext: false })} className="control-one"></div>
				<div onClick={() => handleChangeCarousel({ isNext: true })} className="control-two"></div>
			</div>
		</div>
	);
}

export default Carousel