// import { test, describe, expect } from '@jest/globals';
import React from 'react';
import * as redux from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';

import { TMessageState } from '@store/reducerMessage';
import { TTasksState } from '@store/reducerTasks';

import App from './App';

const mockStore = configureStore([thunk]);

const initialState : { message: TMessageState, tasks: TTasksState } = {
  message: {
    isVisible: false,
    isWarning: false,
    label: '',
    text: ''
  },
  tasks: { items: [] }
};

function renderApp(url: string) {

  const history = createMemoryHistory();
  history.push(url);

  render(
    <redux.Provider store={mockStore(initialState)}>
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    </redux.Provider>
  );

}

describe('App routing works correctly', () => {

  test('Render All tasks page when user navigate to /', () => {
    const url = '/';
    renderApp(url);
    expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
  });

  test('Render Active tasks page when user navigate to /active', () => {
    const url = '/active';
    renderApp(url);
    expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
  });

  test('Render Completed tasks page when user navigate to /completed', () => {
    const url = '/completed';
    renderApp(url);
    expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
  });

  test('Render 404 page when user navigate to wrong path', () => {
    const url = '/not-exist-path';
    renderApp(url);
    expect(screen.getByText('It seems there isn\'t such page...')).toBeInTheDocument();
  });

});
