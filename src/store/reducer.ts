import { combineReducers } from 'redux';

import reducerMessage, { TMessageState } from '@store/reducerMessage';

export type TState = {
  message: TMessageState
};

const reducer = combineReducers({
  message: reducerMessage
});

export default reducer;
