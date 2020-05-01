import React, { Component } from 'react';

export default class AudioProjectTile extends Component {
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
        const { featuredImage, content } = this.props;

        return (
            <div className="audio-project-tile">
                <div className="audio-project-tile-inner">
                    <div className="audio-project-image-holder">
                        <div
                            className={['audio-project-image' + (this.state.loaded ? ' loaded' : ' loading')]}
                            style={{ backgroundImage: "url(" + featuredImage + ")" }}
                        >
                            {!this.state.loaded &&
                                <img
                                    src={featuredImage || ''}
                                    onLoad={this.handleImageLoaded.bind(this)}
                                />
                            }
                        </div>
                    </div>
                    <div
                        className="audio-project-player" 
                        dangerouslySetInnerHTML={{ __html: content.rendered }} 
                    >

                    </div>
                </div>
            </div>
        )
    }
}
