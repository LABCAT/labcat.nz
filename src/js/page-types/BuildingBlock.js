
import React, { useContext, Fragment } from 'react';
import { useRouteData } from 'react-static';

import { Context } from '../context/Context.js';

export default function BuildingBlock() {
    const { buildingBlock } = useRouteData();

    return (
        <section className="building-block">
            <h1 dangerouslySetInnerHTML={{ __html: buildingBlock.title.rendered }} >

            </h1>
            <figure className="building-block-featured-image">
                <img src={buildingBlock.featuredImage} alt={buildingBlock.title.rendered} />
            </figure>
            <div className="editor-content" dangerouslySetInnerHTML={{ __html: buildingBlock.content.rendered }} >

            </div>
        </section>
    )
}


