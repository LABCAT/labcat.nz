import React, { useContext, useState, useEffect, useCallback }  from 'react';
import { useRouteData, Head } from 'react-static';

import { Context } from '../context/Context.js';

import NavigationTile from '../components/NavigationTile.js';

export default function Home(props) {
    const { 
        hasLoaded, 
        homePageHeroLoaded, 
        setHomePageHeroLoaded, 
        homePageHero, 
        setHomePageHero 
    } = useContext(Context)
    const { home, children } = useRouteData();
    const [translate, setTranslate] = useState(0);

    const scrollToContent = useCallback(
        () => {
            if (typeof document !== 'undefined' && typeof window !== 'undefined') { 
                const splashHeight = document.getElementById('hero').clientHeight;
                let i = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
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
        }
    );

    const windowScroll = () => {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
            const hero = document.getElementById('hero');
            if (hero) {
                const splashHeight = document.getElementById('hero').clientHeight;
                const scrollPos = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
                if (scrollPos >= splashHeight) {
                    setTranslate(-(scrollPos - splashHeight));
                }
                else {
                    setTranslate(0);
                }
            }
        }
    }

    useEffect(
        () => {
            if(!homePageHero) {
                const heroImage = home.featuredImages.length 
                    ? home.featuredImages[Math.floor(Math.random()*home.featuredImages.length)] 
                    : home.featuredImage;
                setHomePageHero(heroImage);
            }
            if (typeof document !== 'undefined' && typeof window !== 'undefined' && hasLoaded) {
                const hero = document.getElementById('hero');
                if(hero){
                    const splashHeight = hero.clientHeight;
                    const minHeight = splashHeight * 2;
                    const bodyHeight = splashHeight + document.getElementById('content').clientHeight;
                    document.body.style.height = Math.max(minHeight, bodyHeight) + 'px';
                    window.addEventListener(
                        'scroll',
                        windowScroll
                    );
                }
            }
        }
    );
    return (
        <section className="home-page">
            <Head><title>{home.title.rendered}</title></Head>
            <div
                id="hero"
                className="home-page-hero"
            >
                <div
                    className={['home-page-hero-image' + (homePageHeroLoaded ? ' loaded' : ' loading')]}
                    style={{ backgroundImage: "url(" + homePageHero + ")" }}
                >
                    {!homePageHeroLoaded &&
                        <img
                            src={homePageHero || ''}
                            onLoad={() => setHomePageHeroLoaded(true)}
                        />
                    }
                </div>
                <div className="overlay"></div>
                <button className={['home-page-cta' + (hasLoaded ? ' loaded' : '')]} onClick={scrollToContent}>
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
                                    (page) =>  {
                                        return (
                                            <NavigationTile
                                                columns='col col-xl-2'
                                                url={`/${page.slug}/`}
                                                title={page.title}
                                                featuredImage={page.featuredImage}
                                                imagePadding="56.5"
                                                key={page.id}
                                                headinglevel="2"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
