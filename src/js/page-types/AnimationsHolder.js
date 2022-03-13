import React from 'react'
import { useRouteData, Head } from 'react-static';
import NavigationTile from '../components/NavigationTile.js';

export default function AnimationsHolder() {
    const { animationsPage, animationProjects } = useRouteData();
    return (
        <section className="animations-holder container">
            <Head><title>{animationsPage.title.rendered}</title></Head>
            <h1>{animationsPage.title.rendered}</h1>
            <div className="grid">
                {
                    animationProjects.map(
                        (project, index) =>  {
                            const columnClass = 'navigation-tile--column-' + ((index % 3) + 1); 
                            return (
                                <NavigationTile
                                    columns='col col-lg-3'
                                    extraClasses={columnClass}
                                    newTab={true}
                                    url={`${project.animationLink}`}
                                    title={project.title}
                                    featuredImage={project.featuredImage}
                                    imagePadding="154.88"
                                    key={project.id}>
                                >
                                </NavigationTile>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}