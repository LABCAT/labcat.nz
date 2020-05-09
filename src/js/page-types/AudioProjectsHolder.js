import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import NavigationTile from '../components/NavigationTile.js';

export default function AudioProjectsHolder() {
    const { audioPage, audioProjects } = useRouteData();
    return (
        <section className="container">
            <h1>{audioPage.title.rendered}</h1>
            <div className="grid">
                {
                    audioProjects.map(
                        project => (
                            <NavigationTile
                                columns='col col-xl-2 col-xxl-3'
                                url={`/${audioPage.slug}/${project.slug}/`}
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