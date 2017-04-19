import React from 'react';
import { Route } from 'react-router-dom';

import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';

import '../../node_modules/grommet-css';

import Home from './Home';
import MainAppBar from './MainAppBar';
import MainNavDrawer from './MainNavDrawer';
import Posts from './Posts';

import '../index.css';

import mobxify from './mobxify';

function AppMeat({ uiStore }) {
  function getSplitPriority() {
    return (uiStore.isMainNavDrawerActive) ? 'left' : 'right';
  }

  return (
    <GrommetApp>
      <Split flex="right" priority={getSplitPriority()}>
        <MainNavDrawer />
        <Box pad={{ horizontal: 'small' }}>
          <MainAppBar />
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </Box>
      </Split>
    </GrommetApp>
  );
}

export default mobxify('uiStore')(AppMeat);
