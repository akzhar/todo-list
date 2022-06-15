import React from 'react';

import TaskBoard from '@components/TaskBoard';

const AllPage: React.FC = () => (
  <>
    <h1 className="visually-hidden">Список всех задач</h1>
    <TaskBoard />
  </>
);

export default AllPage;


