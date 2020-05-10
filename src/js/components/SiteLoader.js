import React, { Component } from 'react';

class SiteLoader extends React.Component {
    createCircles = (numOfCircles) => {
        let circles = []

        for (let i = 1; i <= numOfCircles; i++) {
            circles.push(
                <b></b>
            );
        }
        return circles;
    }

    render() {
        return (
            <div className="loader">
                {this.createCircles(this.props.circleCount)}
            </div>
        );
    }
}

export default Loader;