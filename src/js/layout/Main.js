import React, { Fragment, useContext, useEffect } from 'react';
import ResizeDetector  from 'react-resize-detector';
import { Root, Routes } from 'react-static'
import { Router, Location } from '@reach/router';
//need cjs version for some reason:
//https://github.com/facebook/jest/issues/8186
import { Transition, animated } from 'react-spring/renderprops.cjs';

import { Context } from '../context/Context.js';

import Header from '../layout/Header.js';
import Footer from '../layout/Footer.js';
import Loader from '../components/Loader.js';
import SiteLoader from '../components/SiteLoader.js';

export const ScrollToTop = ({ children, location }) => {
    React.useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);
    return children;
;}

function Main() {
    let main = React.useRef();

    const { 
        isHomePage,
        hasLoaded,
        showHeaderNav, 
        showFooter,
        setWindowWidth, 
        toggleIsHomePage, 
        toggleShowHeaderNav,
        toggleShowFooter
    } = useContext(Context);
    
    const onResize = (width, height) => {
        let showHeaderNav = null;
        let showFooter = null;
        if(width < 992){
            showHeaderNav = false;
            showFooter = true;
        }
        else {
            showHeaderNav = true;
            showFooter = false;
        }
        setWindowWidth(width);
        toggleShowHeaderNav(showHeaderNav);
        toggleShowFooter(showFooter);
    };


    useEffect(
        () => {
            if (typeof window !== 'undefined') {
                const currentPageIsHomePage = window.location.pathname === '/' ? true : false;
                if (currentPageIsHomePage != isHomePage) {
                    toggleIsHomePage(currentPageIsHomePage);
                }
            }
        }
    );

    return (
        <React.Fragment>
            {!hasLoaded &&
                <SiteLoader circleCount="20" />
            }
            <Header
                isHome={isHomePage}
                showNav={showHeaderNav}
            />
            <main id="main" ref={main}>
                <React.Suspense fallback={isHomePage ? '' : <Loader />}>
                    <Router>
                        <ScrollToTop path="*">
                            <Routes
                                path="*"
                                render={({ routePath, getComponentForPath }) => {
                                    // The routePath is used to retrieve the component for that path
                                    const element = getComponentForPath(routePath);

                                    if (isHomePage) {
                                        return element;
                                    }
                                    
                                    return (
                                        <Transition
                                            native
                                            items={routePath}
                                            from={{ transform: 'translateY(100px)', opacity: 1 }}
                                            enter={{ transform: 'translateY(0px)', opacity: 1 }}
                                            leave={{ transform: 'translateY(100px)', opacity: 1 }}
                                        >
                                            {item => props => {
                                                return <animated.div style={props}>{element}</animated.div>
                                            }}
                                        </Transition>
                                    )
                                }}
                            />
                        </ScrollToTop>
                    </Router>
                </React.Suspense>
                <ResizeDetector handleWidth handleHeight onResize={onResize} targetDomEl={main.current} />
            </main>
            <Footer display={showFooter} />
        </React.Fragment>
    )
}

export default Main;