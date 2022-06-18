import { TTasksState, initialTasksState } from '@store/reducerTasks';

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

  getState(): TTasksState {
      const str = localStorage.getItem('tasks');
      if (str) {
        return JSON.parse(str);
      }
      return initialTasksState;
  }

  saveState(state: TTasksState) {
    localStorage.setItem('tasks', JSON.stringify(state));
  }

}

export default Storage;
