import React from 'react'
import { Link } from '@reach/router'

export default function Header(props) {
    const { showNav, isHome } = props;
    return (
        <header id="site-header" className={isHome ? 'is-home' : 'show-border'}>
            <a href="/" className="logo">
                LABCAT
            </a>
            {
                isHome &&
                <span class='subtitle'>DIGITAL ARTIST</span>
            }
            {
                showNav && !isHome && 
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

