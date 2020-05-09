import React, { Component } from 'react';
import { Link } from '@reach/router';

export default class NavigationTile extends Component {
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
        const { columns, url, title, featuredImage, imagePadding } = this.props;

        return (
            <article className={[columns + ' navigation-tile' + (this.state.loaded ? ' loaded' : ' loading')]}>
                <Link to={url}>
                    <div className="navigation-tile-image-holder">
                        <div
                            className={['navigation-tile-image' + (this.state.loaded ? ' loaded' : ' loading')]}
                            style={{ backgroundImage: "url(" + featuredImage + ")", paddingBottom: imagePadding + "%" }}
                        >
                            {!this.state.loaded &&
                                <img
                                    src={featuredImage || ''}
                                    onLoad={this.handleImageLoaded.bind(this)}
                                />
                            }
                        </div>
                    </div>
                    <h3 className="navigation-tile-title" dangerouslySetInnerHTML={{ __html: title.rendered }}>

                    </h3>
                </Link>
            </article>
        )
    }
}
