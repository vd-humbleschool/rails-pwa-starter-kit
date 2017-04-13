import React from 'react';

import { inject, observer } from 'mobx-react';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

function MyAppBar({ uiStore }) {
  return (
    <AppBar leftIcon="menu"
            onLeftIconClick={uiStore.toggleMainNavDrawerActive} />
  );
}

export default inject('uiStore')(observer(MyAppBar));
