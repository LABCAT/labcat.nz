import React, { useContext } from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
import * as easings from 'd3-ease';

import { Context } from '../context/Context.js';

export default function SiteLoader(props) {
    const { completeLoading } = useContext(Context);
    const { circleCount, isHomePage, homePageHeroLoaded } = props; 

    const createCircles = (numOfCircles) => {
        let circles = []

        for (let i = 1; i <= numOfCircles; i++) {
            circles.push(
                <b key={i}></b>
            );
        }
        return circles;
    }
    console.log(homePageHeroLoaded);

    return (
        <React.Fragment>
            {
                (isHomePage && !homePageHeroLoaded) ?
                    <div className="site-loader">
                        <div className="site-loader-inner">
                            {createCircles(circleCount)}
                        </div>
                    </div>
                : <Spring
                    from={{ opacity: 1 }}
                    to={{ opacity: 0 }}
                    delay={isHomePage ? 0 : 2000}
                    config={
                        {
                            duration: 4000,
                            easing: easings.easeLinear
                        }
                    }
                    onRest= {
                        () => {
                            completeLoading();
                        }
                    } 
                >
                    {styleProps => (
                        <div className="site-loader" style={styleProps}>
                            <div className="site-loader-inner">
                                {createCircles(circleCount)}
                            </div>
                        </div>
                    )}
                </Spring>
            }
        </React.Fragment>
    );
}

