import React from 'react'
import { useRouteData } from 'react-static'

export default function AudioProject() {
    const { project } = useRouteData()
    return (
        <div>
            <br />
            <h3>{project.title.rendered}</h3>
            <p>{project.content.rendered}</p>
            <p>{project.featuredImage}</p>
        </div>
    )
}
