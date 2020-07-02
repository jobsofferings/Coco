import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState, propsState } from '../../store/types';
import * as actions from '../../store/actions';

import { NotificationOutlined } from '@ant-design/icons';
import './index.scss'

interface ChangeCarousel {
    isNext: boolean
}

function Carousel(state: StoreState) {
    const [trans, setTrans] = React.useState(0);
    const [interval, setInterval] = React.useState(0);
    const carouselList = ['React1', 'Vue1', 'Ang1', 'React2', 'Vue2', 'Ang2']

    /**
     * 上一个轮播
     **/
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
        setInterval(window.setInterval(startChangeCarousel, 7000));
        return () => {
            window.clearInterval(interval);
        }
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

export function mapStateToProps(state: propsState) {
    return {  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.HeadAction>) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Carousel));