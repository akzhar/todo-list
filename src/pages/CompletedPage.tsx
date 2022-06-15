import React from 'react';

import TaskBoard, {ViewType} from '@components/TaskBoard';

const CompletedPage: React.FC = () => (
  <>
    <h1 className="visually-hidden">Список выполненных задач</h1>
    <TaskBoard type={ViewType.COMPLETED}/>
  </>
);

export default CompletedPage;
