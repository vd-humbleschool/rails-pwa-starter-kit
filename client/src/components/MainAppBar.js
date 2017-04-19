import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import MenuIcon from 'grommet/components/icons/base/Menu';

import mobxify from './mobxify';

function MainAppBar({ uiStore }) {
  return (
    <Header fixed>
      <MenuIcon onClick={() => uiStore.toggleMainNavDrawerActive()} />
      <Title>RPSK</Title>
    </Header>
  );
}

export default mobxify('uiStore')(MainAppBar);
