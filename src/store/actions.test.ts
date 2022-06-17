import { test, describe, expect } from '@jest/globals';
import createId from '@utils/createID';

import ActionCreator, { ActionTypes } from '@store/actions';
import { TTask } from '@store/reducerTasks';

describe('Tasks action creators should return correct action', () => {

  test('Creation task', () => {
    const text = 'Buy a bottle of water';
    const expectedTask: TTask = {
      id: createId(),
      text,
      isCompleted: false
    };
    const expectedAction = {
      type: ActionTypes.CREATE_TASK,
      payload: expectedTask
    };
    expect(ActionCreator.createTask({ text })).toEqual(expectedAction);
   });

  test('Toggle task status', () => {
    const id = createId();
    const expectedAction = {
      type: ActionTypes.TOGGLE_TASK_STATUS,
      payload: id
    };
    expect(ActionCreator.toggleTaskStatus({ id })).toEqual(expectedAction);
   });

  test('Clear all completed tasks', () => {
    const expectedAction = {
      type: ActionTypes.CLEAR_COMPLETED_TASKS
    };
    expect(ActionCreator.clearCompletedTasks()).toEqual(expectedAction);
   });

});
