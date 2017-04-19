import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Section from 'grommet/components/Section';

import compose from 'lodash/fp/compose';
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
      <ListItem key={`${post.id}`}>{post.title}</ListItem>
    );
  }

  render() {
    return (
      <Article>
        <Section>
          <Heading>Posts</Heading>
          <List>
            {map(this.postItemUi)(this.postsStore.posts)}
          </List>
        </Section>
      </Article>
    );
  }
}

export default mobxify('postsStore')(Posts);
