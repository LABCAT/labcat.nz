import React, { Component } from 'react';
import ResizeDetector  from 'react-resize-detector';
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router';

import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
import Loader from './components/Loader.js';

export default class Main extends Component {
    constructor() {
        super();
        this.main = React.createRef();

        this.state = {
            isHomePage: true,
            showHeaderNav: false,
            showFooter: false,
        }
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
        return (
            <React.Fragment>
                <Header 
                    showNav={this.state.showHeaderNav}
                    isHome={isHome}
                />
                <main id="main" ref={this.main}>
                    <React.Suspense fallback={isHome ? '' : <Loader/>}>
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