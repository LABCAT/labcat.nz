import React, { useState, Fragment } from 'react';
import { Link } from '@reach/router';
import { useSpring, animated } from 'react-spring'

import Loader from './Loader.js';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function NavigationTile(props) {
    const { columns, url, title, featuredImage, imagePadding } = props;
    const [springProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [loaded, setLoaded] = useState(false);

    return (
        <animated.article className={[columns + ' navigation-tile' + (loaded ? ' loaded' : ' loading')]}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: springProps.xys.interpolate(trans) }}
            >
            <Link to={url}>
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
                <h3 className="navigation-tile-title" dangerouslySetInnerHTML={{ __html: title.rendered }}>

                </h3>
            </Link>
        </animated.article>
    );
}
