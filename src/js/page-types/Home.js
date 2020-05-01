import React, { Fragment }  from 'react'
import { useRouteData } from 'react-static'
import NavigationTile from '../components/NavigationTile.js';
import SplashBackground from '../components/SplashBackground.js';

export default function Home() {
    const { home, children } = useRouteData();
    return (
        <section className="home-page">
            <SplashBackground image={home.featuredImage} />
            <div className="home-page-content">
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
        </section>
    )
}
