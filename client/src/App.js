import React from 'react';
import { Provider as StoreProvider } from 'mobx-react';

import postsStore from './stores/postsStore';
import uiStore from './stores/uiStore';

import MainLayout from './components/MainLayout';

import './App.css';

const stores = { postsStore, uiStore };

function App() {
  return (
    <StoreProvider {...stores}>
      <MainLayout />
    </StoreProvider>
  );
}

export default App;
