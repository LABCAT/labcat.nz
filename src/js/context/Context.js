import React, { createContext, useReducer } from 'react';

import Reducer from "./Reducer";

const initialState = {
    windowWidth: 0,
    hasLoaded: false,
    isHomePage: true,
    homePageHero: '',
    homePageHeroLoaded: false,
    showHeaderNav: false,
    showFooter: false,
}

export const Context = createContext(initialState);
export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const setWindowWidth = (newWidth) => {
        dispatch({ type: "SET_WINDOW_WIDTH", payload: newWidth });
    }

    const completeLoading = () => {
        dispatch({ type: "SET_HAS_LOADED", payload: true });
    }

    const toggleIsHomePage = (newState) => {
        dispatch({ type: "SET_IS_HOME_PAGE", payload: newState });
    }

    const setHomePageHero = (newState) => {
        dispatch({ type: "SET_HOME_PAGE_HERO", payload: newState });
    }

    const setHomePageHeroLoaded = (newState) => {
        dispatch({ type: "SET_HOME_PAGE_HERO_LOADED", payload: newState });
    }

    const toggleShowHeaderNav = (newState) => {
        dispatch({ type: "SET_SHOW_HEADER_NAV", payload: newState });
    }

    const toggleShowFooter = (newState) => {
        dispatch({ type: "SET_SHOW_FOOTER", payload: newState });
    }

    return <Context.Provider 
                value={
                    { 
                        windowWidth: state.windowWidth,
                        hasLoaded: state.hasLoaded,
                        isHomePage: state.isHomePage,
                        homePageHero: state.homePageHero,
                        homePageHeroLoaded: state.homePageHeroLoaded,
                        showHeaderNav: state.showHeaderNav,
                        showFooter: state.showFooter,
                        setWindowWidth,
                        completeLoading,
                        toggleIsHomePage,
                        setHomePageHero,
                        setHomePageHeroLoaded,
                        toggleShowHeaderNav,
                        toggleShowFooter
                    }
                }
            >
                {children}
            </Context.Provider>
};
