import React from 'react';
import { useRouteData } from 'react-static';
import AudioProjectTile from '../components/AudioProjectTile.js';

export default function AudioProject() {
    const { project } = useRouteData();
    return (
        <section className="container audio-project">
            <h1>{project.title.rendered}</h1>
            <AudioProjectTile
                featuredImage={project.featuredImage}
                content={project.content}
            />
        </section>
    )
}
