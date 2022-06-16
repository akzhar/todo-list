import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskCounter from '@components/TaskCounter';
import Navigation from '@components/Navigation';
import Button from '@components/Button';
import ActionCreator from '@store/actions';
import { TTask } from '@store/reducerTasks';
import { TState } from '@store/reducer';

const Toolbar: React.FC = () => {

  const activeTasksCount: number = useSelector((state: TState) => {
    return state.tasks.items.filter((task: TTask) => !task.isCompleted).length;
  });

  const dispatch = useDispatch();

  const clearCompletedTasks = useCallback(() => {
    dispatch(ActionCreator.clearCompletedTasks());
    dispatch(ActionCreator.setInfoMessage({ label: '😊', text: 'All completed tasks were cleared' }));
  }, []);

  return (
    <div className="toolbar">
      <TaskCounter count={activeTasksCount} verb="left" />
      <Navigation />
      <Button title="Clear completed" clickHandler={() => clearCompletedTasks()}/>
    </div>
  );

};

export default Toolbar;
