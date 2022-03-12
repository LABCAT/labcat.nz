import React from 'react'
import { useRouteData, Head } from 'react-static';
import NavigationTile from '../components/NavigationTile.js';

export default function AnimationsHolder() {
    const { animationsPage, animationProjects } = useRouteData();
    return (
        <section className="audio-projects-holder container">
            <Head><title>{animationsPage.title.rendered}</title></Head>
            <h1>{animationsPage.title.rendered}</h1>
            <div className="grid">
                {
                    animationProjects.map(
                        project => (
                            <NavigationTile
                                columns='col col-lg-2 col-xxl-3'
                                url={`${project.animationLink}`}
                                title={project.title}
                                featuredImage={project.featuredImage}
                                imagePadding="100"
                                key={project.id}>
                            >
                            </NavigationTile>
                        )
                    )
                }
            </div>
        </section>
    )
}