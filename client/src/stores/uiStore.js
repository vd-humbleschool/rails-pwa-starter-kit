import { action, extendObservable } from 'mobx';

class UiStore {
  constructor() {
    extendObservable(this, {
      isMainNavDrawerActive: false,

      toggleMainNavDrawerActive: action(() => {
        this.isMainNavDrawerActive = !this.isMainNavDrawerActive;
      })
    });
  }
}

const uiStore = new UiStore();

export default uiStore;
