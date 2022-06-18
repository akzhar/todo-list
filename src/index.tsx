import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Storage from '@services/Storage';
import throttle from 'utils/throttle';

import reducer, { TState } from '@store/reducer';

import App from './App';

import './index.sass';

const storage = new Storage();

const persistedState : TState = storage.getState();

const store: Store<TState> = createStore(
  reducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

const saveState = throttle(() => {
  storage.saveState(store.getState());
}, 1000);

store.subscribe(saveState);

const container = document.querySelector('#root');

if (container) {
  createRoot(container).render(
    <Provider store={store}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Provider>,
  );
}
