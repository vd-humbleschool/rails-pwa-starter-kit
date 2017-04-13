import React from 'react';
import { withRouter } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';

function MainNavDrawer({ history, uiStore }) {
  function closeDrawerAndNavigateTo(path) {
    uiStore.toggleMainNavDrawerActive();
    history.push(path);
  }

  return (
    <NavDrawer active={uiStore.isMainNavDrawerActive}
               permanentAt="xxxl"
               onOverlayClick={uiStore.toggleMainNavDrawerActive}>
      <List selectable>
        <ListItem caption="Home"
                  onClick={() => closeDrawerAndNavigateTo('/')} />
        <ListItem caption="Posts"
                  onClick={() => closeDrawerAndNavigateTo('/posts')} />
      </List>
    </NavDrawer>
  );
}

export default withRouter(
  inject('uiStore')(observer(MainNavDrawer))
);
