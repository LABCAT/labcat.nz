
import React from 'react';
import { useRouteData } from 'react-static';


export default function CreativeCodingProject() {
    const { project } = useRouteData()
    return (
        <section className="creative-coding-project">
            <h1 dangerouslySetInnerHTML={{ __html: project.title.rendered }} >

            </h1>
            <div className="editor-content" dangerouslySetInnerHTML={{ __html: project.content.rendered }} >

            </div>
        </section>
    )
}
