import React from 'react';

import TaskBoard, {ViewType} from '@components/TaskBoard';

const ActivePage: React.FC = () => (
  <>
    <h1 className="visually-hidden">Список активных задач</h1>
    <TaskBoard viewType={ViewType.ACTIVE}/>
  </>
);

export default ActivePage;


