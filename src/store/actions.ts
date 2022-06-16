import createID from '@utils/createID';

import { TTask } from '@store/reducerTasks';

export type TAction = {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
};

export enum ActionTypes {
  // message
  RESET_MESSAGE = 'reset message',
  SET_WARNING_MESSAGE = 'set warning message',
  SET_INFO_MESSAGE = 'set info message',
  SHOW_MESSAGE = 'show message',
  HIDE_MESSAGE = 'hide message',
  // tasks
  CREATE_TASK = 'create task',
  TOGGLE_TASK_STATUS = 'toggle task status',
  CLEAR_COMPLETED_TASKS = 'clear completed tasks',
}

interface ISetMessage {
  label: string,
  text?: string
}

interface ICreateTask {
  text: string
}
interface IToggleTaskStatus {
  id: string
}

const ActionCreator = {
  setInfoMessage: ({ label, text }: ISetMessage) => {
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.SET_INFO_MESSAGE, payload: { label, text } });
      dispatch({ type: ActionTypes.SHOW_MESSAGE});
      setTimeout(() => {
        dispatch({ type: ActionTypes.RESET_MESSAGE});
      }, 1500);
    }
  },
  setWarningMessage: ({ label, text }: ISetMessage) => {
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } });
      dispatch({ type: ActionTypes.SHOW_MESSAGE});
      setTimeout(() => {
        dispatch({ type: ActionTypes.RESET_MESSAGE});
      }, 1500);
    }
  },
  createTask: ({ text }: ICreateTask) => {
    const id = createID();
    const newTask: TTask = { id, text, isCompleted: false};
    return { type: ActionTypes.CREATE_TASK, payload: newTask };
  },
  toggleTaskStatus: ({ id }: IToggleTaskStatus) => ({ type: ActionTypes.TOGGLE_TASK_STATUS, payload: id }),
  clearCompletedTasks: () => ({ type: ActionTypes.CLEAR_COMPLETED_TASKS })
};

export default ActionCreator;
