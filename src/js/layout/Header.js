import React from 'react'
import { Link } from '@reach/router'
import Logo from '../components/Logo'
import InstagramLogo from '../components/InstagramLogo'
import GitHubLogo from '../components/GitHubLogo'

export default function Header(props) {
    const { showNav, isHome, hasLoaded } = props;
    return (
        <header id="site-header" className={isHome ? 'is-home' : 'show-border'}>
            <Link to="/" className={hasLoaded ? "logo logo--loaded" : "logo"}>
                <span className={hasLoaded ? "logo__shadow logo__shadow--loaded" : "logo__shadow"}>LABCAT</span>
                { Logo }
            </Link>
            {
                isHome && 
                <span className={hasLoaded ? "subtitle subtitle--loaded" : "subtitle"}>DIGITAL ARTIST</span>
            }
            {
                showNav && !isHome && 
                <>
                    <nav>
                        <Link to="animations">
                            Animations
                        </Link>
                        <Link to="creative-coding">
                            Creative Coding
                        </Link>
                        <Link to="audio">
                            Audio Projects
                        </Link>
                    </nav>
                    <div className="social-links">
                        <a href="https://www.instagram.com/labcat2020/" className="social-links__link social-links__link--instagram social-links__link--first" target="_blank">
                            { InstagramLogo }
                        </a>
                        <a href="https://github.com/LABCAT/" className="social-links__link social-links__link--github" target="_blank">
                            { GitHubLogo }
                        </a>
                    </div>
                </>
            }
        </header>
    )
}

