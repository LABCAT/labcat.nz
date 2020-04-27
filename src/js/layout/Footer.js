import React from 'react'
import { Link } from '@reach/router'

export default function Footer() {

    return (
        <footer id="site-footer">
            <Link to="creative-coding">
                Creative Coding
            </Link>
            <Link to="audio">
                Audio Projects
            </Link>
        </footer>
    )
}

