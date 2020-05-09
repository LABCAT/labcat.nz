import React, { useState, useEffect  }  from 'react';
import { useRouteData } from 'react-static';
import NavigationTile from '../components/NavigationTile.js';



export default function Home() {
    const { home, children } = useRouteData();
    const [loaded, setLoaded] = useState(false);
    const [translate, setTranslate] = useState(0);


    useEffect(
        () => {
            const splashHeight = document.getElementById('hero').clientHeight;
            const minHeight = splashHeight * 2;   
            const bodyHeight = splashHeight + document.getElementById('content').clientHeight;
            document.body.style.height = Math.max(minHeight, bodyHeight) + 'px';
            window.addEventListener(
                'scroll', 
                function () {
                    const doc = document.documentElement;
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
                <div
                    className={['home-page-hero-image' + (loaded ? ' loaded' : ' loading')]}
                    style={{ backgroundImage: "url(" + home.featuredImage + ")" }}
                >
                </div>
                <div className="overlay"></div>
                {!loaded &&
                    <img
                    src={home.featuredImage || ''}
                        onLoad={() => setLoaded(true)}
                    />
                }
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
