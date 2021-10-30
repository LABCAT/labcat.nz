import React from 'react'
import { Link } from '@reach/router'
import Logo from '../components/Logo'

export default function Header(props) {
    const { showNav, isHome, hasLoaded } = props;
    return (
        <header id="site-header" className={isHome ? 'is-home' : 'show-border'}>
            <Link to="/" className={hasLoaded ? "logo logo--loaded" : "logo"}>
                <span className="logo__shadow">LABCAT</span>
                { Logo }
            </Link>
            {
                isHome &&
                <span className='subtitle'>DIGITAL ARTIST</span>
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

