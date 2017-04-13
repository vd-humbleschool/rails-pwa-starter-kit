import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'mobx-react';
import postsStore from './stores/postsStore';
import uiStore from './stores/uiStore';

import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../assets/react-toolbox/theme';
import '../assets/react-toolbox/theme.css';

import Home from './components/Home';
import MainNavDrawer from './components/MainNavDrawer';
import MyAppBar from './components/MyAppBar';
import Posts from './components/Posts';

import './index.css';

const stores = { postsStore, uiStore };

function App() {
  return (
    <Provider {...stores}>
      <Router>
        <ThemeProvider theme={theme}>
          <Layout>
            <MainNavDrawer />
            <Panel>
              <MyAppBar />
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Posts} />
            </Panel>
          </Layout>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
