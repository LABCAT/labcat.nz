export default function reducer(state, action) {
    switch(action.type){
        case "SET_WINDOW_WIDTH": {
            return {
                ...state,
                windowWidth: action.payload
            }
        }
        case "SET_HAS_LOADED": {
            return {
                ...state,
                hasLoaded: action.payload
            }
        }
        case "SET_IS_HOME_PAGE": {
            return {
                ...state,
                isHomePage: action.payload
            }
        }
        case "SET_HOME_PAGE_HERO": {
            return {
                ...state,
                homePageHero: action.payload
            }
        }
        case "SET_HOME_PAGE_HERO_LOADED": {
            return {
                ...state,
                homePageHeroLoaded: action.payload
            }
        }
        case "SET_SHOW_HEADER_NAV": {
            return {
                ...state,
                showHeaderNav: action.payload
            }
        }
        case "SET_SHOW_FOOTER": {
            return {
                ...state,
                showFooter: action.payload
            }
        }
        default: 
            throw new Error('Action type does not exist!')
    }
}