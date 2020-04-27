import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'

function Main() {
    return (
        <Root>
            <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                    <Routes path="*" />
                </Router>
            </React.Suspense>
        </Root>
    )
}

export default Main;
