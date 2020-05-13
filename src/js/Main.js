import React, { Component } from 'react';
import ResizeDetector  from 'react-resize-detector';
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router';

import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
import Loader from './components/Loader.js';
import SiteLoader from './components/SiteLoader.js';

export default class Main extends Component {
    constructor() {
        super();
        this.main = React.createRef();

        this.state = {
            hasLoaded: false,
            isHomePage: true,
            showHeaderNav: false,
            showFooter: false,
        }
    }

    componentDidMount(){
        setTimeout(
            () => {
                this.setState({ hasLoaded: true });
            }, 
            2000
        );
    }

    onResize = (width, height) => {
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

        this.setState(
            {
                ...this.state,
                showHeaderNav,
                showFooter
            }
        );
    };

    render() {
        const path = window.location.pathname;
        const isHome = path === '/' ? true : false;
        console.log(this.state.hasLoaded);
        return (
            <React.Fragment>
                <SiteLoader circleCount="20" loaded={this.state.hasLoaded}/>
                <Header
                    showNav={this.state.showHeaderNav}
                    isHome={isHome}
                />
                <main id="main" ref={this.main}>
                    <React.Suspense fallback={isHome ? '' : <Loader />}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                    </React.Suspense>
                    <ResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.main.current} />
                </main>
                <Footer display={this.state.showFooter} />
            </React.Fragment>
        )
    }
}