import React from 'react';

import Logo from '@components/Logo';
import TaskBoard, {ViewType} from '@components/TaskBoard';

const ActivePage: React.FC = () => (
  <>
    <Logo />
    <h1 className="visually-hidden">Active tasks</h1>
    <TaskBoard viewType={ViewType.ACTIVE}/>
  </>
);

export default ActivePage;


