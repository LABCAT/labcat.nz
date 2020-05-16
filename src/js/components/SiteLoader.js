import React, { Component } from 'react';

export default function SiteLoader(props) {

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
        <div className={['site-loader' + (props.loaded ? ' loaded' : '')]}>
            <div className="site-loader-inner">
                { createCircles(props.circleCount) }
            </div>
        </div>
    );
}

