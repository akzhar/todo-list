import { ActionTypes, TAction } from '@store/actions';

export type TTask = {
  id: string,
  text: string,
  isCompleted?: boolean
};

export type TTasksState = {
  items: TTask[]
};

const initialState: TTasksState = {
  items: []
};

const reducerTasks = (state: TTasksState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.CREATE_TASK: {
      const newTask = action.payload;
      return {...state, items: [newTask, ...state.items]};
    }
    case ActionTypes.TOGGLE_TASK_STATUS: {
      const id = action.payload;
      const task = state.items.find((task: TTask) => task.id === id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
      return {...state};
    }
    case ActionTypes.CLEAR_COMPLETED_TASKS: {
      const onlyOpenTasks = state.items.filter((task: TTask) => !task.isCompleted);
      return {...state,  items: onlyOpenTasks};
    }
    default:
      return {...state};
  }
};

export default reducerTasks;
