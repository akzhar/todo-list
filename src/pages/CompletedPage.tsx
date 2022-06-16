import React from 'react';

import Logo from '@components/Logo';
import TaskBoard, {ViewType} from '@components/TaskBoard';

const CompletedPage: React.FC = () => (
  <>
    <Logo />
    <h1 className="visually-hidden">Completed tasks</h1>
    <TaskBoard viewType={ViewType.COMPLETED}/>
  </>
);

export default CompletedPage;
