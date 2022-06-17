import { TState, initialState } from '@store/reducer';

class Storage {

  static _instance: Storage

  constructor() {
    if (!Storage._instance) {
      Storage._instance = this;
    }
    return Storage._instance;
  }

  static getInstance() {
    return this._instance;
  }

  getState(): TState {
      const str = localStorage.getItem('state');
      if (str) {
        return JSON.parse(str);
      }
      return initialState;
  }

  saveState(state: TState) {
    localStorage.setItem('state', JSON.stringify(state));
  }

}

export default Storage;
