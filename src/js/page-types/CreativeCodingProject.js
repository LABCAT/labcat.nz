
import React, { useContext, Fragment } from 'react';
import { useRouteData } from 'react-static';

import { Context } from '../context/Context.js';

export default function CreativeCodingProject() {
    const { windowWidth } = useContext(Context);
    const { project } = useRouteData();
    const showProject = windowWidth >= 992 ? true : false;
    return (
        <section className="creative-coding-project">
            <h1 dangerouslySetInnerHTML={{ __html: project.title.rendered }} >

            </h1>
            { 
                showProject ?
                <div className="editor-content" dangerouslySetInnerHTML={{ __html: project.content.rendered }} >

                </div> :
                <blockquote className="creative-coding-project-browser-message">
                    <p>Sorry your browser needs to be at least 1000px wide to view this project.😞</p>
                </blockquote>
            }
        </section>
    )
}


