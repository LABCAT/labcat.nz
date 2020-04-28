import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import NavigationTile from '../components/NavigationTile.js';

export default function CreativeCodingProjectsHolder() {
    const { creativeCodingPage, codeProjects } = useRouteData();
    return (
        <section className="container">
            <h1>{creativeCodingPage.title.rendered}</h1>
            <div className="grid col-md-2 col-xl-3">
                {
                    codeProjects.map(
                        project => (
                            <NavigationTile
                                url={`/${creativeCodingPage.slug}/${project.slug}/`}
                                title={project.title}
                                featuredImage={project.featuredImage}
                                imagePadding="52"
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