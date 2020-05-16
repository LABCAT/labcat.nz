import React, { useContext, useState, useEffect } from 'react';

import { Context } from '../context/Context.js';

export default function SiteLoader(props) {
    const { completeLoading } = useContext(Context);
    const [fadeOut, setFadeOut] = useState(false);
    const [opacity, setOpacity] = useState(1);
    

    const createCircles = (numOfCircles) => {
        let circles = []

        for (let i = 1; i <= numOfCircles; i++) {
            circles.push(
                <b key={i}></b>
            );
        }
        return circles;
    }

    useEffect(
        () => {
            if (!fadeOut){
                setTimeout(
                    () => {
                        setFadeOut(true);
                    },
                    2000
                );
            }
            let interval = null;
            if (fadeOut && opacity > 0) {
                interval = setInterval(
                    () => {
                        let newOpacity = (opacity - 0.01).toFixed(2);
                        setOpacity(opacity => newOpacity);
                    }, 
                    50
                );
            } 
            else if (!fadeOut && opacity > 0) {
                clearInterval(interval);
            }
            else {
                completeLoading();
            }
            return () => clearInterval(interval);;
        },
        [fadeOut, opacity]
    );

    return (
        <div className="site-loader" style={{ opacity: opacity }}>
            <div className="site-loader-inner">
                { createCircles(props.circleCount) }
            </div>
        </div>
    );
}

