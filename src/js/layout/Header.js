import React from 'react'
import { Link } from '@reach/router'

export default function Header() {
    return (
        <header id="site-header">
            <a href="/" className="logo">
                LABCAT
            </a>
            <span>DIGITAL ARTIST</span>
            <Link to="creative-coding">
                Creative Coding
            </Link>
            <Link to="audio">
                Audio Projects
            </Link>
        </header>
    )
}

