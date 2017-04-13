import { action, extendObservable } from 'mobx';

import { apiEndpoint } from '../ApiUtils';

class PostsStore {
  constructor() {
    extendObservable(this, {
      posts: [],
      isFetching: false,
      fetchError: null,

      fetchPosts: action(() => {
        this.isFetching = true;

        fetch(apiEndpoint('/posts')).then((response) => {
          return response.json();
        }).then((json) => {
          this.posts = json;
          this.fetchError = null;
        }).catch((error) => {
          this.fetchError = error;
        }).then(() => {
          this.isFetching = false;
        });
      })
    });
  }
}

const postsStore = new PostsStore();

export default postsStore;
