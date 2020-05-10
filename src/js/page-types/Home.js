import React, { useState, useEffect, useCallback }  from 'react';
import { useRouteData } from 'react-static';
import NavigationTile from '../components/NavigationTile.js';
import Loader from '../components/Loader.js';




export default function Home() {
    const doc = document.documentElement;
    const { home, children } = useRouteData();
    const [loaded, setLoaded] = useState(false);
    const [translate, setTranslate] = useState(0);
    const scrollToContent = useCallback(
        () => {
            const splashHeight = document.getElementById('hero').clientHeight;
            let i = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            let interval = setInterval(
                function(){ 
                    window.scrollTo(0, i);
                    if (i > splashHeight){
                        clearInterval(interval);
                    }
                    i = i + 20;
                }, 
                10
            );
        }
    );

    useEffect(
        () => {
            const splashHeight = document.getElementById('hero').clientHeight;
            const minHeight = splashHeight * 2;   
            const bodyHeight = splashHeight + document.getElementById('content').clientHeight;
            document.body.style.height = Math.max(minHeight, bodyHeight) + 'px';
            window.addEventListener(
                'scroll', 
                function () {
                    const scrollPos = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
                    if (scrollPos > splashHeight){
                        setTranslate(-(scrollPos - splashHeight));
                    }
                    else {
                        setTranslate(0);
                    }
                }
            );
        }
    );

    
    
    return (
        <section className="home-page">
            <div
                id="hero"
                className="home-page-hero"
            >
                {!loaded &&
                    <Loader/>
                }
                <div
                    className={['home-page-hero-image' + (loaded ? ' loaded' : ' loading')]}
                    style={{ backgroundImage: "url(" + home.featuredImage + ")" }}
                >
                    {!loaded &&
                        <img
                            src={home.featuredImage || ''}
                            onLoad={() => setLoaded(true)}
                        />
                    }
                </div>
                <div className="overlay"></div>
                <button className="home-page-cta" onClick={scrollToContent}>
                    <span>EXPLORE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M 16.59,6.59 12,11.17 7.41,6.59 6,8 l 6,6 6,-6 z" />
                        <path d="m 16.596169,10.218979 -4.59,4.58 -4.5900002,-4.58 -1.41,1.41 6.0000002,6 6,-6 z" />
                    </svg>
                </button>
            </div>
            <div className="home-page-content-holder">
                <div id="content" className="home-page-content" style={{ transform: "translateY(" + translate + "px)" }}>
                    <div className="container">
                        <div className="grid">
                            {
                                children.map(
                                    page => (
                                        <NavigationTile
                                            columns='col col-xl-2'
                                            url={`/${page.slug}/`}
                                            title={page.title}
                                            featuredImage={page.featuredImage}
                                            imagePadding="52"
                                            key={page.id}>
                                            >
                                        </NavigationTile>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
