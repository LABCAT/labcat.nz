import React from 'react'
import { useRouteData, Head } from 'react-static';
import NavigationTile from '../components/NavigationTile.js';

export default function BuildingBlocksProjectsHolder() {
    const { buildingBlocksPage, buildingBlocksProjects } = useRouteData();
    return (
        <section className="building-blocks-holder container">
            <Head><title>{buildingBlocksPage.title.rendered}</title></Head>
            <h1>{buildingBlocksPage.title.rendered}</h1>
            <div className="grid">
                {
                    buildingBlocksProjects.map(
                        (project, index) =>  {
                            const columnClass = 'navigation-tile--column-' + ((index % 2) + 1); 
                            return (
                                 <NavigationTile
                                    columns='col col-sm-2'
                                    extraClasses={columnClass}
                                    url={`/${buildingBlocksPage.slug}/${project.slug}/`}
                                    title={project.title}
                                    featuredImage={project.featuredImage}
                                    imagePadding="141.43"
                                    key={project.id}>
                                >
                                </NavigationTile>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}