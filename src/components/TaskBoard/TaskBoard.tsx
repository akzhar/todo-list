import React, { useCallback, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@components/Button';
import Task from '@components/Task/Task';
import { AppRoutes } from '@consts/const';
import { TTask } from '@store/reducerTasks';
import { TState } from '@store/reducer';
import ActionCreator from '@store/actions';

export enum ViewType {
  'ALL' = 'All',
  'ACTIVE' = 'Active',
  'COMPLETED' = 'Completed'
}

type TaskBoardProps = {
  viewType?: ViewType
};

const TaskBoard: React.FC<TaskBoardProps> = ({viewType = ViewType.ALL}) => {

  let tasks: TTask[] = useSelector((state: TState) => state.tasks.items);

  switch(viewType) {
    case ViewType.ACTIVE:
      tasks = tasks.filter((task: TTask) => !task.isCompleted);
      break;
    case ViewType.COMPLETED:
      tasks = tasks.filter((task: TTask) => task.isCompleted);
      break;
    default:
      break;
  }

  const dispatch = useDispatch();

  const toggleTaskStatus = useCallback((id: string) => {
    dispatch(ActionCreator.toggleTaskStatus({ id }));
  }, []);

  const clearCompletedTasks = useCallback(() => {
    dispatch(ActionCreator.clearCompletedTasks());
    dispatch(ActionCreator.setInfoMessage({ label: '😊', text: 'All completed tasks were cleared' }));
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const enterKeyHandler = (evt: KeyboardEvent) => {
    const inputHasFocus = Boolean(document.activeElement?.id === inputRef.current?.id);
    const inputHasValue = Boolean(inputRef.current?.value);
    if(evt.key === 'Enter' && inputHasFocus && inputHasValue) {
      if (inputRef.current) {
        dispatch(ActionCreator.createTask({ text: inputRef.current.value }));
        dispatch(ActionCreator.setInfoMessage({ label: '😊', text: 'New task was added to the list' }));
        inputRef.current.value = '';
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', enterKeyHandler);
    return () => {
      window.removeEventListener('keydown', enterKeyHandler);
    }
  }, []);

  return (
    <div className="board">
      <div className="board__input">
        <input type="text" id="task-input" placeholder="What needs to be done?" ref={inputRef} />
      </div>
      {
        tasks.length
      ?
        <ul className="board__list">
        {
          tasks.map((data: TTask) => <Task key={data.id} data={data} changeHandler={() => toggleTaskStatus(data.id)} />)
        }
        </ul>
      :
        <span className="board__list-plug">There are no tasks yet</span>
      }
      <div className="board__footer">
        <span className="board__list-counter">{`${tasks.length} items left`}</span>
        <nav>
          <Button title={ViewType.ALL} url={AppRoutes.ALL} />
          <Button title={ViewType.ACTIVE} url={AppRoutes.ACTIVE} />
          <Button title={ViewType.COMPLETED} url={AppRoutes.COMPLETED} />
        </nav>
        <Button title="Clear completed" clickHandler={() => clearCompletedTasks()}/>
      </div>
    </div>
  );

}

export default TaskBoard;
