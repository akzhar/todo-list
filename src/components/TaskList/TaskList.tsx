import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Task from '@components/Task/Task';
import { TTask } from '@store/reducerTasks';
import { TState } from '@store/reducer';
import ActionCreator from '@store/actions';

const TaskList: React.FC = () => {

  const { pathname } = useLocation();

  let tasks: TTask[] = useSelector((state: TState) => state.tasks.items);

  switch(pathname) {
    case '/active':
      tasks = tasks.filter((task: TTask) => !task.isCompleted);
      break;
    case '/completed':
      tasks = tasks.filter((task: TTask) => task.isCompleted);
      break;
    default:
      break;
  }

  const dispatch = useDispatch();

  const toggleTaskStatus = useCallback((id: string) => {
    dispatch(ActionCreator.toggleTaskStatus({ id }));
  }, []);

  return (
    <>
      {
        tasks.length
        ?
        <ul className="task-list">
          {
            tasks.map((data: TTask) => {
              return <Task key={data.id} data={data} changeHandler={() => toggleTaskStatus(data.id)} />
            })
          }
        </ul>
        :
        <span className="task-list__plug">There are no tasks yet</span>
        }
    </>
  )
};

export default TaskList;
