import React from 'react';

import { GlobalContextProvider } from './context/Context';
import Main from './layout/Main.js';

function App() {
    return (
        <GlobalContextProvider>
            <Main/>
        </GlobalContextProvider>
    )
}

export default App;