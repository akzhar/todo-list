import React from 'react';

type TTask = {
  id: string,
  text: string,
  isCompleted?: boolean,
  changeHandler?: () => void
};

const Task: React.FC<TTask> = ({ id, text, isCompleted, changeHandler }) => (
  <li className="task">
    <input id={id} type="checkbox" checked={isCompleted} onChange={changeHandler}/>
    <label htmlFor={id}>{text}</label>
  </li>
);

export default Task;
