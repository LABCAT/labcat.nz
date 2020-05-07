import React, { Component } from 'react';

export default class SplashBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
    }

    handleImageLoaded() {
        this.setState({ loaded: true });
    }

    render() {
        const { image } = this.props;

        return (
            <div
                id="splash"
                className={['splash-background' + (this.state.loaded ? ' loaded' : ' loading')]}
                style={{ backgroundImage: "url(" + image + ")" }}
            >
                <div className="overlay"></div>
                {!this.state.loaded &&
                    <img
                        src={image || ''}
                        onLoad={this.handleImageLoaded.bind(this)}
                    />
                }
            </div>
        )
    }
}
