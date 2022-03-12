import React, { useEffect } from 'react';
import { useRouteData, Head } from 'react-static';

export default function AnimationProject() {
    const { project } = useRouteData();

    useEffect(
        () => {
            if (typeof window !== 'undefined') {
                window.location = project.animationLink;
            }
        }
    );

    return (
        <section className="container">
            <Head><title>{project.title.rendered}</title></Head>
        </section>
    )
}
