import { action, extendObservable } from 'mobx';

import { apiEndpoint } from '../ApiUtils';

class PostsStore {
  constructor() {
    extendObservable(this, {
      // Posts
      posts: [],
      isFetchingPosts: false,
      postsFetchError: null,
      // Single post
      post: null,
      isFetchingPost: false,
      postFetchError: null,

      fetchPosts: action(() => {
        this.isFetchingPosts = true;

        fetch(apiEndpoint('/posts')).then((response) => {
          return response.json();
        }).then((json) => {
          this.posts = json;
          this.postsFetchError = null;
        }).catch((error) => {
          this.postsFetchError = error;
        }).then(() => {
          this.isFetchingPosts = false;
        });
      }),

      fetchPost: action((id) => {
        this.isFetchingPost = true;

        fetch(apiEndpoint(`/posts/${id}`)).then((response) => {
          return response.json();
        }).then((json) => {
          this.post = json;
          this.postFetchError = null;
        }).catch((error) => {
          this.postFetchError = error;
        }).then(() => {
          this.isFetchingPost = false;
        })
      })
    });
  }
}

const postsStore = new PostsStore();

export default postsStore;
