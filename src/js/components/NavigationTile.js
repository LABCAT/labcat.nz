import React, { useState, Fragment } from 'react';
import { Link } from '@reach/router';
import { useSpring, animated } from 'react-spring'

import Loader from './Loader.js';

let height = 1080;
let width = 1920;

if (typeof window !== 'undefined') {
    height = window.innerHeight;
    width = window.innerWidth;
}

const calc = (x, y) => [-(y - height / 2) / 20, (x - width / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function NavigationTile(props) {
    const { columns, url, title, featuredImage, imagePadding, headinglevel } = props;
    const Heading = 'h' + (headinglevel ? headinglevel : '3');
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
                <Heading className="navigation-tile-title" dangerouslySetInnerHTML={{ __html: title.rendered }}>

                </Heading>
            </Link>
        </animated.article>
    );
}
