import React, { Fragment, useEffect  }  from 'react'
import { useRouteData } from 'react-static'
import NavigationTile from '../components/NavigationTile.js';
import SplashBackground from '../components/SplashBackground.js';

export default function Home() {
    const { home, children } = useRouteData();
    

    useEffect(
        () => {
            const minHeight = document.getElementById('splash').clientHeight * 2;   
            const bodyHeight = document.getElementById('splash').clientHeight + document.getElementById('content').clientHeight;
            document.body.style.height = Math.max(minHeight, bodyHeight) + 'px';
        }
    );
    
    return (
        <section className="home-page">
            <SplashBackground image={home.featuredImage} />
            <div className="home-page-fixed">
                <div id="content" className="home-page-content">
                    <div className="container">
                        <div className="grid col-md-1 col-xl-2">
                            {
                                children.map(
                                    page => (
                                        <NavigationTile
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
