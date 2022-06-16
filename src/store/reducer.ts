import { combineReducers } from 'redux';

import reducerMessage, { TMessageState } from '@store/reducerMessage';
import reducerTasks, {TTasksState} from '@store/reducerTasks';

export type TState = {
  message: TMessageState,
  tasks: TTasksState
};

const reducer = combineReducers({
  message: reducerMessage,
  tasks: reducerTasks
});

export default reducer;
