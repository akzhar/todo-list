import { test, describe, expect } from '@jest/globals';
import createId from '@utils/createID';

import ActionCreator from '@store/actions';
import reducerTasks, { TTask } from '@store/reducerTasks'

describe('Tasks reducer changes state correctly', () => {

  test('Returns initial state by default', () => {
    const initialState = { items: [] };
    expect(reducerTasks(undefined, { type: 'Unknow action' })).toEqual(initialState);
  });

  test('Adds new task in state', () => {
    const tasks: TTask[] = [
      {
        id: '1',
        text : 'Do homework',
        isCompleted: true
      }
    ];
    const state = { items: tasks };
    const text = 'Buy a bottle of water';
    const newTask: TTask = {
      id: createId(),
      text,
      isCompleted: false
    };
    const action = ActionCreator.createTask({ text });
    expect(reducerTasks(state, action)).toEqual({ items: [newTask, ...state.items] });
  });

  test('Toggles task\'s status', () => {
    const tasks: TTask[] = [
      {
        id: '2',
        text : 'Workout',
        isCompleted: false
      }
    ];
    const state = { items: tasks };
    const action = ActionCreator.toggleTaskStatus({ id: '2' });
    const newState = reducerTasks(state, action);
    expect(newState).toEqual({ items: [{ id: '2', text : 'Workout', isCompleted: true }] });
  });

  test('Clears all completed tasks', () => {
    const tasks: TTask[] = [
      {
        id: '1',
        text : 'Do homework',
        isCompleted: true
      },
      {
        id: '2',
        text : 'Workout',
        isCompleted: false
      },
      {
        id: '3',
        text : 'Watch YouTube',
        isCompleted: true
      },
      {
        id: '4',
        text : 'Cook dinner',
        isCompleted: false
      }
    ];
    const state = { items: tasks };
    const action = ActionCreator.clearCompletedTasks();
    const newState = reducerTasks(state, action);
    expect(newState.items.map((task: TTask) => task.id)).toEqual(['2', '4']);
  });

});
