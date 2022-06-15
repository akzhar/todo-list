import React from 'react';

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
    <div className="board__list">{`List ${type}`}</div>
    <div className="board__footer">Counter & Buttons</div>
  </div>
);

export default TaskBoard;
