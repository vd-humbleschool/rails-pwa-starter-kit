import { action, extendObservable } from 'mobx';

class UiStore {
  constructor() {
    extendObservable(this, {
      isMainNavActive: false,

      setMainNavActive: action((isActive) => {
        this.isMainNavActive = isActive;
      }),

      toggleMainNavActive: action(() => {
        this.setMainNavActive(!this.isMainNavActive);
      })
    });
  }
}

const uiStore = new UiStore();

export default uiStore;
