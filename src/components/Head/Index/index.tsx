import * as React from 'react';

import './index.scss'
import Carousel from './Carousel';
import Articles from './Articles';
import Menu from './Menu';
import Category from './Category';

function Index() {

    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            console.log(e);
        })
    }, [])

    return (
        <div className="content-area" key="one">
            <div className="content-area-left">
                <Carousel />
                <Articles />
            </div>
            <div className="content-area-right">
                <div className="content-area-right-fixed">
                    <Category />
                    <Menu />
                </div>
            </div>
        </div>
    );
}

export default Index;
