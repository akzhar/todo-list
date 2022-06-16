import React from 'react';

import Logo from '@components/Logo';
import TaskBoard from '@components/TaskBoard';

const AllPage: React.FC = () => (
  <>
    <Logo />
    <h1 className="visually-hidden">All tasks</h1>
    <TaskBoard />
  </>
);

export default AllPage;


