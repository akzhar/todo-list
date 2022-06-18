// import { test, describe, expect } from '@jest/globals';
import React from 'react';
import * as redux from 'react-redux';
import { applyMiddleware, Store, createStore } from 'redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducer, { TState, initialState } from '@store/reducer';
import { TTask } from '@store/reducerTasks';

import App from './App';

const createMockedStore = configureStore([thunk]);
const createRealStore = (state: TState): Store<TState> => {
  return createStore(
    reducer,
    state,
    applyMiddleware(thunk)
  );
}

function renderApp(url: string, store: Store<TState> | MockStoreEnhanced<unknown>) {

  const history = createMemoryHistory();
  history.push(url);

  render(
    <redux.Provider store={store}>
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    </redux.Provider>
  );

}

describe('App routing works correctly', () => {

  const text1 = 'Buy a bottle of water';
  const text2 = 'Do homework';
  const task1: TTask = { id: '123', text: text1, isCompleted: false };
  const task2: TTask = { id: '321', text: text2, isCompleted: true };
  const mockedStore = createMockedStore({...initialState, tasks: { items: [task1, task2] }});

  test('Render All tasks page when user navigate to /', () => {
    const url = '/';
    renderApp(url, mockedStore);
    expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('Render Active tasks page when user navigate to /active', () => {
    const url = '/active';
    renderApp(url, mockedStore);
    expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.queryByText(text2)).not.toBeInTheDocument();
  });

  test('Render Completed tasks page when user navigate to /completed', () => {
    const url = '/completed';
    renderApp(url, mockedStore);
    expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
    expect(screen.queryByText(text1)).not.toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('Render 404 page when user navigate to wrong path', () => {
    const url = '/not-exist-path';
    renderApp(url, mockedStore);
    expect(screen.getByText('It seems there isn\'t such page...')).toBeInTheDocument();
  });

});

describe('User actions work correctly', () => {

  const spyDispatch = jest.spyOn(redux, 'useDispatch');

  test('User can create a task', async () => {
    const text = 'Buy a bottle of water';
    const url = '/';
    const realStore = createRealStore(initialState);

    renderApp(url, realStore);
    const input = screen.getByPlaceholderText('What needs to be done?');

    userEvent.type(input, text);
    fireEvent.click(screen.getByText('Create task'));
    const state = await realStore.getState();
    const checkbox = screen.getByLabelText(text);
    const li = screen.getByText(text);
    expect(spyDispatch).toBeCalled();
    expect(li).toHaveTextContent(text);
    expect(checkbox).not.toBeChecked();
    expect(state.tasks.items[0].text).toBe(text);
  });

  test('User can close a task', async () => {
    const text = 'Buy a bottle of water';
    const task: TTask = { id: '123', text, isCompleted: false };
    const url = '/';
    const realStore = createRealStore({...initialState, tasks: { items: [task] }});

    renderApp(url, realStore);
    const checkbox = screen.getByLabelText(text);
    const li = screen.getByText(text);

    fireEvent.click(li);
    const state = await realStore.getState();
    expect(checkbox).toBeChecked();
    expect(state.tasks.items[0].isCompleted).toBe(true);
  });

  test('User can reopen a task', async () => {
    const text = 'Buy a bottle of water';
    const task: TTask = { id: '123', text, isCompleted: true };
    const url = '/';
    const realStore = createRealStore({...initialState, tasks: { items: [task] }});

    renderApp(url, realStore);
    const checkbox = screen.getByLabelText(text);
    const li = screen.getByText(text);

    fireEvent.click(li);
    const state = await realStore.getState();
    expect(checkbox).not.toBeChecked();
    expect(state.tasks.items[0].isCompleted).toBe(false);
  });

  test('User can clear completed tasks', async () => {
    const text1 = 'Buy a bottle of water';
    const text2 = 'Do homework';
    const task1: TTask = { id: '123', text: text1, isCompleted: false };
    const task2: TTask = { id: '321', text: text2, isCompleted: true };
    const url = '/';
    const realStore = createRealStore({...initialState, tasks: { items: [task1, task2] }});

    renderApp(url, realStore);
    const btn = screen.getByText('Clear completed');

    fireEvent.click(btn);
    const state = await realStore.getState();
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.queryByText(text2)).not.toBeInTheDocument();
    expect(state.tasks.items.length).toBe(1);
    expect(state.tasks.items[0].id).toBe('123');
  });

});
