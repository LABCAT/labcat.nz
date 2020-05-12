import React, { Component } from 'react';

class SiteLoader extends React.Component {
    createCircles = (numOfCircles) => {
        let circles = []

        for (let i = 1; i <= numOfCircles; i++) {
            circles.push(
                <b key={i}></b>
            );
        }
        return circles;
    }

    render() {

        return (
            <div className={['site-loader' + (this.props.loaded ? ' loaded' : '')]}>
                <div className="site-loader-inner">
                    {this.createCircles(this.props.circleCount)}
                </div>
            </div>
        );
    }
}

export default SiteLoader;