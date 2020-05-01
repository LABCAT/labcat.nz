import React from 'react'
import { Link } from '@reach/router'

export default function Header(props) {
    return (
        <header id="site-header">
            <a href="/" className="logo">
                LABCAT
                <span>DIGITAL ARTIST</span>
            </a>
            {
                props.showNav && 
                <nav>
                    <Link to="creative-coding">
                        Creative Coding
                    </Link>
                        <Link to="audio">
                            Audio Projects
                    </Link>
                </nav>
            }
        </header>
    )
}

