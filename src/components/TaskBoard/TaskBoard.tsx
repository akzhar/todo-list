import React from 'react';

import InputForm from '@components/InputForm';
import TaskList from '@components/TaskList';
import Toolbar from '@components/Toolbar';

const TaskBoard: React.FC = () => (
  <div className="task-board">
    <InputForm />
    <TaskList />
    <Toolbar />
  </div>
);

export default TaskBoard;
