import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider as StoreProvider } from 'mobx-react';
import postsStore from './stores/postsStore';
import uiStore from './stores/uiStore';

import AppMeat from './components/AppMeat';

const stores = { postsStore, uiStore };

function App() {
  return (
    <StoreProvider {...stores}>
      <Router>
        <AppMeat />
      </Router>
    </StoreProvider>
  );
}

export default App;
