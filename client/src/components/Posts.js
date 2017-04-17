import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.postsStore = props.postsStore;
  }

  componentDidMount() {
    this.postsStore.fetchPosts();
  }

  postItemUi(post) {
    return (
      <ListItem
        key={`${post.id}`}
        avatar="http://mattsawyers.com/wp-content/uploads/2013/12/camera.png"
        caption={post.title}
      />
    );
  }

  render() {
    return (
      <List selectable>
        {map(this.postItemUi)(this.postsStore.posts)}
      </List>
    );
  }
}

const hoc = compose(
  inject('postsStore'),
  observer
);

export default hoc(Posts);
