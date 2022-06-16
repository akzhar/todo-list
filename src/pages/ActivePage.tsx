import React from 'react';

import Logo from '@components/Logo';
import TaskBoard from '@components/TaskBoard';

const ActivePage: React.FC = () => (
  <>
    <Logo />
    <h1 className="visually-hidden">Active tasks</h1>
    <TaskBoard />
  </>
);

export default ActivePage;


