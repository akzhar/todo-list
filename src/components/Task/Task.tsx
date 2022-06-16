import React, { useState } from 'react';

import { TTask } from '@store/reducerTasks';

type TTaskProps = {
  data: TTask,
  changeHandler?: () => void
};

const Task: React.FC<TTaskProps> = ({ data, changeHandler }) => {

  const [isChecked, setIsChecked] = useState<boolean | undefined>(data.isCompleted);

  return (
    <li className="task">
      <input
        id={data.id}
        type="checkbox" checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          if (changeHandler) {
            changeHandler();
          }
        }}
        />
      <label htmlFor={data.id}>{data.text}</label>
    </li>
  );

}

export default Task;
