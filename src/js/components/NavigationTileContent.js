import React, { useState } from 'react';
import Loader from './Loader.js';

export default function NavigationTile(props) {
    const { title, featuredImage, imagePadding, headinglevel } = props,
        
        [loaded, setLoaded] = useState(false),
        
        Heading = 'h' + (headinglevel ? headinglevel : '3');

    return (
        <>
            <div 
                className="navigation-tile-image-holder"
                
            >
                {!loaded &&
                    <Loader />
                }
                <div
                    className={['navigation-tile-image' + (loaded ? ' loaded' : ' loading')]}
                    style={{ backgroundImage: "url(" + featuredImage + ")", paddingBottom: imagePadding + "%" }}
                >
                    {!loaded &&
                        <img
                            src={featuredImage || ''}
                            onLoad={() => setLoaded(true)}
                        />
                    }
                </div>
            </div>
            <Heading className="navigation-tile-title" dangerouslySetInnerHTML={{ __html: title.rendered }}>

            </Heading>
        </>
    );
}
