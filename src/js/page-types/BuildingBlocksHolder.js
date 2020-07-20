import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import NavigationTile from '../components/NavigationTile.js';

export default function BuildingBlocksHolder() {
    const { buildingBlockPage, buildingBlocks } = useRouteData();
    return (
        <section className="container">
            <h1>{buildingBlockPage.title.rendered}</h1>
            <div className="grid">
                {
                    buildingBlocks.map(
                        buildingBlock => (
                            <NavigationTile
                                columns="col col-md-2 col-xl-3"
                                url={`/${buildingBlockPage.slug}/${buildingBlock.slug}/`}
                                title={buildingBlock.title}
                                featuredImage={buildingBlock.featuredImage}
                                imagePadding="65.84"
                                key={buildingBlock.id}>
                            >
                            </NavigationTile>
                        )
                    )
                }
            </div>
        </section>
    )
}