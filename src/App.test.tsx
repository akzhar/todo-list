import React from 'react';
import * as redux from 'react-redux';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { test, describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from 'App';

const mockStore = configureStore({});
describe('App routing works correctly', () => {

  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');

  test('Render All tasks page when user navigate to /', () => {

    const history = createMemoryHistory();
    history.push('/');

    render(
      <redux.Provider store={mockStore({})}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </redux.Provider>
    );

    expect(screen.getByText(/Active/i)).toBeinTheDocument();

  });

});
