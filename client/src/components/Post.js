import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import mobxify from './mobxify';

class Post extends Component {
  constructor(props) {
    super(props);

    this.postsStore = props.postsStore;
  }

  componentWillMount() {
    this.postsStore.fetchPost(this.props.match.params.id);
  }

  attachmentUi(attachment) {
    return (
      <video controls>
        <source src={attachment.access_urls['360p']} />
      </video>
    );
  }

  postUi(post) {
    return (
      <div>
        <Link to="/posts">Back to Posts</Link>
        <h1>{post.title}</h1>
        {post.attachment && this.attachmentUi(post.attachment)}
      </div>
    );
  }

  render() {
    if (this.postsStore.isFetchingPost) {
      return <div>Fetching...</div>;
    } else if (this.postsStore.post) {
      return this.postUi(this.postsStore.post);
    }
  }
}

export default mobxify('postsStore')(Post);
