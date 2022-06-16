import React from 'react';

import InputField from '@components/InputField';
import TaskList from '@components/TaskList';
import Toolbar from '@components/Toolbar';

const TaskBoard: React.FC = () => (
  <div className="task-board">
    <InputField />
    <TaskList />
    <Toolbar />
  </div>
);

export default TaskBoard;
