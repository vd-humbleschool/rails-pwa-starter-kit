import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.postsStore = props.postsStore;
  }

  componentDidMount() {
    this.postsStore.fetchPosts();
  }

  render() {
    return (
      <ul>
        {this.postsStore.posts.map((post) => (
          <li key={`${post.id}`}>{post.id}</li>
        ))}
      </ul>
    );
  }
}

export default inject('postsStore')(observer(Posts));
