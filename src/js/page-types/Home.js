import React, { Fragment }  from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

export default function Home() {
    const { home, children } = useRouteData();
    console.log(home);
    return (
        <React.Fragment>
            <h1>{home.title.rendered}</h1>
            <ul>
                {
                    children.map(
                        page => (
                            <li key={page.id}>
                                <Link to={`/${page.slug}/`}>
                                    <span dangerouslySetInnerHTML={{ __html: page.title.rendered }}>

                                    </span>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </React.Fragment>
    )
}
