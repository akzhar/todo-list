import React from 'react';

import Button from '@components/Button';
import Task from '@components/Task/Task';
import { AppRoutes } from '@consts/const';

export enum ViewType {
  'ALL' = 'All',
  'ACTIVE' = 'Active',
  'COMPLETED' = 'Completed'
}

type TaskBoardProps = {
  type?: ViewType
};

const TaskBoard: React.FC<TaskBoardProps> = ({type = ViewType.ALL}) => (
  <div className="board">
    <div className="board__input">
      <input type="text" placeholder="What needs to be done?"/>
    </div>
    <ul className="board__list">
      <Task id="1" text={'Тестовое задание'}/>
      <Task id="2" text={'Прекрасный код'} isCompleted />
    </ul>
    <div className="board__footer">
      <span className="board__counter">{`${1} items left`}</span>
      <nav>
        <Button title={ViewType.ALL} url={AppRoutes.ALL} />
        <Button title={ViewType.ACTIVE} url={AppRoutes.ACTIVE} />
        <Button title={ViewType.COMPLETED} url={AppRoutes.COMPLETED} />
      </nav>
      <Button title="Clear completed"/>
    </div>
  </div>
);

export default TaskBoard;
