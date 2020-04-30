import React, { Component, Fragment } from 'react';
import ResizeDetector  from 'react-resize-detector';
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router';

import Header from './layout/Header.js';
import Footer from './layout/Footer.js';

export default class Main extends Component {
    constructor() {
        super();
        this.mainEl = React.createRef();

        this.state = {
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
        return (
            <React.Fragment>
                <Header showNav={this.state.showHeaderNav}/>
                <main id="main" ref={this.mainEl}>
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                    </React.Suspense>
                    <ResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.mainEl.current} />
                </main>
                <Footer display={this.state.showFooter} />
            </React.Fragment>
        )
    }
}