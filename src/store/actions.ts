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
  CLOSE_TASK = 'close task',
  OPEN_TASK = 'open task',
  CLEAR_COMPLETED_TASKS = 'clear completed tasks',
}

interface ISetMessage {
  label: string,
  text?: string
}

interface ICreateTask {}

interface ICloseTask {}

interface IOpenTask {}

interface IClearCompletedTasks {}

const ActionCreator = {
  reset: () => {
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.RESET_MESSAGE});
    }
  },
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
  createTask: (params: ICreateTask) => {
    return { type: ActionTypes.CREATE_TASK, payload: '' };
  },
  closeTask: (params: ICloseTask) => {
    return { type: ActionTypes.CLOSE_TASK, payload: '' };
  },
  openTask: (params: IOpenTask) => {
    return { type: ActionTypes.OPEN_TASK, payload: '' };
  },
  clearCompletedTasks: (params: IClearCompletedTasks) => {
    return { type: ActionTypes.CLEAR_COMPLETED_TASKS, payload: '' };
  }
};

export default ActionCreator;
