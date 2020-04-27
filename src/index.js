import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './js/Main';
import './scss/build.scss';

// Export your top level component as JSX (for static rendering)
export default Main;

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    )
  }

  // Render!
  render(Main)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./js/Main', () => {
      render(Main)
    })
  }
}
