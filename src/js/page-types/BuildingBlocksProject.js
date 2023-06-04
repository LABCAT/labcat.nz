import React from 'react';
import { useRouteData, Head } from 'react-static';
import BuildingBlocksProjectTile from '../components/BuildingBlocksProjectTile.js';

export default function BuildingBlocksProject() {
    const { project } = useRouteData();
    const { featuredImages } = project;
    console.log(featuredImages);
    return (
        <section className="container audio-project">
            <Head><title>{project.title.rendered}</title></Head>
            <h1>{project.title.rendered}</h1>
            <div className='grid'>
                {
                    featuredImages.map(
                        (image, index) =>  {
                            const columnClass = 'building-blocks-tile--column-' + ((index % 4) === 0 ? '4' : (index % 4));
                            return (
                                index > 0 ?
                                <BuildingBlocksProjectTile
                                    featuredImage={image}
                                    extraClasses={columnClass}
                                    key={index}
                                /> :
                                null
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}
