import React from 'react';

type TTaskCounterProps = {
  count: number,
  verb?: string
};

const TaskCounter: React.FC<TTaskCounterProps>= ({ count, verb = '' }) => (
  <span className="task-counter">{`${count} item${count !== 1 ? 's' : ''} ${verb}`}</span>
);

export default TaskCounter;
