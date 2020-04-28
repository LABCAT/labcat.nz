import React, { Fragment }  from 'react'
import { useRouteData } from 'react-static'
import NavigationTile from '../components/NavigationTile.js';

export default function Home() {
    const { home, children } = useRouteData();
    console.log(home);
    return (
        <section className="container">
            <h1>{home.title.rendered}</h1>
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
        </section>
    )
}
