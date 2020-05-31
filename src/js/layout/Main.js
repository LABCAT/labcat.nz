import React, { Fragment, useContext, useEffect } from 'react';
import ResizeDetector  from 'react-resize-detector';
import { Root, Routes } from 'react-static'
import { Router, Location } from '@reach/router';
//need cjs version for some reason:
//https://github.com/facebook/jest/issues/8186
import { Transition, animated, config } from 'react-spring/renderprops.cjs';

import { Context } from '../context/Context.js';

import Header from '../layout/Header.js';
import Footer from '../layout/Footer.js';
import Loader from '../components/Loader.js';
import SiteLoader from '../components/SiteLoader.js';

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


                                    const pageTemplate = pageTypeComponentName(element);
                                    let from = { opacity: 0, transform: 'scale(0.5)' }
                                    let enter = { opacity: 1, transform: 'scale(1)' }

                                    if (pageTemplate === 'CreativeCodingProject'){
                                        from = { opacity: 0, transform: 'translateY(-500px)' }
                                        enter = { opacity: 1, transform: 'translateY(0px)' }
                                    }

                                    if (pageTemplate === 'AudioProject') {
                                        from = { opacity: 0, transform: 'translateX(2000px)' }
                                        enter = { opacity: 1, transform: 'translateX(0px)' }
                                    }
                                    
                                    return (
                                        <Transition
                                            native
                                            items={routePath}
                                            from={from}
                                            enter={enter}
                                            leave={{ display: 'none' }}
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


/* these two functions should really be moved to their own files, even though this is the only component they are used in. */

export const ScrollToTop = ({ children, location }) => {
    //ensures that the scroll position will always begin at the top when a route changes 
    React.useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);
    return children;
}

export const pageTypeComponentName = (element) => {
    //required to get component name when site is running as the static build
    if (element.type.template) {
        const index = element.type.template.lastIndexOf('/') + 1;
        return element.type.template.substring(index);
    }
    return element.type.name;
}