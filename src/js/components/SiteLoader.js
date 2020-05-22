import React, { useContext, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
import * as easings from 'd3-ease';

import { Context } from '../context/Context.js';

export default function SiteLoader(props) {
    const { completeLoading } = useContext(Context);

    const createCircles = (numOfCircles) => {
        let circles = []

        for (let i = 1; i <= numOfCircles; i++) {
            circles.push(
                <b key={i}></b>
            );
        }
        return circles;
    }

    return (
        <Spring
            from={{ opacity: 1 }}
            to={{ opacity: 0 }}
            delay={2000}
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
                        {createCircles(props.circleCount)}
                    </div>
                </div>
            )}
        </Spring>
        
    );
}

