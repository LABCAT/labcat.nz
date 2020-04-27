import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

export default function CreativeProjectsHolder() {
    const { creativeCodingPage, codeProjects } = useRouteData();
    return (
        <React.Fragment>
            <h1>{creativeCodingPage.title.rendered}</h1>
            <ul>
                {
                    codeProjects.map(
                        project => (
                            <li key={project.id}>
                                <Link to={`/${creativeCodingPage.slug}/${project.slug}/`}>
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