import React, { Fragment, useContext, useEffect } from 'react';
import ResizeDetector  from 'react-resize-detector';
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router';

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
        toggleLoadedState, 
        toggleShowHeaderNav,
        toggleShowFooter
    } = useContext(Context)
    
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

            setTimeout(
                () => {
                    toggleLoadedState(true);
                }, 
                2000
            );
        }
    );

    return (
        <React.Fragment>
            <SiteLoader circleCount="20" loaded={hasLoaded} />
            <Header
                isHome={isHomePage}
                showNav={showHeaderNav}
            />
            <main id="main" ref={main}>
                <React.Suspense fallback={isHomePage ? '' : <Loader />}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
                <ResizeDetector handleWidth handleHeight onResize={onResize} targetDomEl={main.current} />
            </main>
            <Footer display={showFooter} />
        </React.Fragment>
    )
}

export default Main;