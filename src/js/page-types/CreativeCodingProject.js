
import React, { useContext, Fragment } from 'react';
import { useRouteData } from 'react-static';

import { Context } from '../context/Context.js';

export default function CreativeCodingProject() {
    const { project } = useRouteData();
    const { windowWidth } = useContext(Context);
    const showProject = windowWidth >= 992 ? true : false;

    if (typeof document !== 'undefined') {
        let myIframe = document.querySelector('iframe');
        if (myIframe && myIframe.src.includes('html')) {
            let myIframeSrc = myIframe.src;
            myIframe.src = '';
            //add a short delay to the loading of the iframe so the react spring animation remains smooth
            setTimeout(
                function () { 
                    myIframe.src = myIframeSrc;
                    myIframe.className = 'loaded';
                }, 
                300
            );
        }
    }

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


