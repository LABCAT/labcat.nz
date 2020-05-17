import React, { useContext, useState, useEffect } from 'react';

import { Context } from '../context/Context.js';

export default function SiteLoader(props) {
    const { completeLoading } = useContext(Context);
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeCompleted, setFadeCompleted] = useState(false);

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
            if (fadeOut && !fadeCompleted){
                setTimeout(
                    () => {
                        completeLoading();
                    },
                    4000
                );
            }
        },
        [fadeOut, fadeCompleted]
    );

    return (
        <div className={['site-loader' + (fadeOut ? ' fade-out' : '')]}>
            <div className="site-loader-inner">
                { createCircles(props.circleCount) }
            </div>
        </div>
    );
}

