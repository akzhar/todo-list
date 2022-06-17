import { combineReducers } from 'redux';

import reducerMessage, { TMessageState, initialMassageState } from '@store/reducerMessage';
import reducerTasks, { TTasksState, initialTasksState } from '@store/reducerTasks';

export type TState = {
  message: TMessageState,
  tasks: TTasksState
};

export const initialState: TState = {
  message: initialMassageState,
  tasks: initialTasksState
};

const reducer = combineReducers({
  message: reducerMessage,
  tasks: reducerTasks
});

export default reducer;
