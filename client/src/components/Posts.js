import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/fp/map';

import mobxify from './mobxify';

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
      <li key={`${post.id}`}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    );
  }

  render() {
    return (
      <ul>
        {map(this.postItemUi)(this.postsStore.posts)}
      </ul>
    );
  }
}

export default mobxify('postsStore')(Posts);
