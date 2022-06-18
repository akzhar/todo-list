import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import ActionCreator from '@store/actions';

const InputForm: React.FC = () => {

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const inputHasValue = Boolean(inputRef.current?.value);
    if(inputRef.current && inputHasValue) {
      dispatch(ActionCreator.createTask({ text: inputRef.current.value }));
      dispatch(ActionCreator.setInfoMessage({ label: '😊', text: 'New task was added to the list' }));
      inputRef.current.value = '';
    }
  };

  return (
    <form className="input-form" onSubmit={formSubmitHandler}>
      <input type="text" placeholder="What needs to be done?" ref={inputRef} />
      <button type="submit" className="visually-hidden" tabIndex={-1}>Create task</button>
    </form>
  );
};

export default InputForm;
