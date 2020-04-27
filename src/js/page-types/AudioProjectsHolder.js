import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

export default function AudioProjectsHolder() {
    const { audioPage, audioProjects } = useRouteData();
    return (
        <React.Fragment>
            <h1>{audioPage.title.rendered}</h1>
            <ul>
                {
                    audioProjects.map(
                        project => (
                            <li key={project.id}>
                                <Link to={`/${audioPage.slug}/${project.slug}/`}>
                                    <span dangerouslySetInnerHTML={{ __html: project.title.rendered }}>

                                    </span>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </React.Fragment>
    )
}