import React from 'react';
import { withRouter } from 'react-router-dom';

import compose from 'lodash/fp/compose';

import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';
import Title from 'grommet/components/Title';

import mobxify from './mobxify';

function MainNavDrawer({ history, uiStore }) {
  function closeDrawerAndNavigateTo(path) {
    uiStore.toggleMainNavDrawerActive();
    history.push(path);
  }

  return (
    <Sidebar size="small" pad="small" colorIndex="neutral-1">
      <Header>
        <Title>Menu</Title>
      </Header>
      <Menu>
        <Anchor onClick={() => closeDrawerAndNavigateTo('/')}>
          Home
        </Anchor>
        <Anchor onClick={() => closeDrawerAndNavigateTo('/posts')}>
          Posts
        </Anchor>
      </Menu>
    </Sidebar>
  );
}

const hoc = compose(
  withRouter,
  mobxify('uiStore')
);

export default hoc(MainNavDrawer);
