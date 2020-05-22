import React, { Component, Fragment } from 'react';


import Loader from './Loader.js';
export default class AudioProjectTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            iframeLoaded: false,
        };
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
    }

    handleImageLoaded() {
        this.setState(
            { 
                imageLoaded: true,
                iframeLoaded: this.state.iframeLoaded
            }
        );
    }

    render() {
        const { featuredImage, content } = this.props;
        if (typeof document !== 'undefined') {
        let myIframe = document.querySelector('iframe');
            if (myIframe){
                myIframe.onload = () => {
                    this.setState(
                        {
                            imageLoaded: this.state.imageLoaded,
                            iframeLoaded: true
                        }
                    );
                };
            }
        }
        
        return (
            <div className="audio-project-tile">
                <div className="audio-project-tile-inner">
                    <div className="audio-project-image-holder">
                        {!this.state.imageLoaded &&
                            <Loader />
                        }
                        <div
                            className={['audio-project-image' + (this.state.imageLoaded ? ' loaded' : ' loading')]}
                            style={{ backgroundImage: "url(" + featuredImage + ")" }}
                        >
                            {!this.state.imageLoaded &&
                                <img
                                    src={featuredImage || ''}
                                    onLoad={this.handleImageLoaded.bind(this)}
                                />
                            }
                        </div>
                    </div>
                    <div
                        className={['audio-project-player' + (this.state.iframeLoaded ? ' loaded' : ' loading')]}
                    >
                        {!this.state.iframeLoaded &&
                            <Loader />
                        }
                        <div dangerouslySetInnerHTML={{ __html: content.rendered }}>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
