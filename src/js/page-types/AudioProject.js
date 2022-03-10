import React from 'react';
import { useRouteData, Head } from 'react-static';
import AudioProjectTile from '../components/AudioProjectTile.js';

export default function AudioProject() {
    const { project } = useRouteData();
    return (
        <section className="container audio-project">
            <Head><title>{project.title.rendered}</title></Head>
            <h1>{project.title.rendered}</h1>
            <AudioProjectTile
                featuredImage={project.featuredImage}
                content={project.content}
            />
        </section>
    )
}
