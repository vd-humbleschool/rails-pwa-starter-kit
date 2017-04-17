import React from 'react';

import { inject, observer } from 'mobx-react';

import compose from 'lodash/fp/compose';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

function MyAppBar({ uiStore }) {
  return (
    <AppBar
      leftIcon="menu"
      onLeftIconClick={uiStore.toggleMainNavDrawerActive}
    />
  );
}

const hoc = compose(
  inject('uiStore'),
  observer
);

export default hoc(MyAppBar);
