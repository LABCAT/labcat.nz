import React from 'react'
import { useRouteData } from 'react-static'

export default function AudioProject() {
    const { project } = useRouteData()
    return (
        <section className="container">
            <h1>{project.title.rendered}</h1>
            <div>
                
            </div>
            <div>
                <br />

                <p>{project.content.rendered}</p>
                <p>{project.featuredImage}</p>
            </div>
        </section>
    )
}
